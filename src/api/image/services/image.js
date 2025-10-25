"use strict";

/**
 * image service
 */

const { createCoreService } = require("@strapi/strapi").factories;
const IMAGE_PROVIDER = {
  PEXELS: "pexels",
};

module.exports = createCoreService("api::image.image", ({ strapi }) => ({
  /**
   * Invoke Pexels API
   * @param {string} keyword - Keyword
   * @param {number} perPage - Number of images per page
   * @param {number} page - Page number
   * @returns {Promise<Array>} Array of image objects
   */
  async invokePexelsApi(keyword, perPage = 24, page = 1) {
    const pexelsApiKey = process.env.PEXELS_API_KEY;
    const pexelsApiUrl = process.env.PEXELS_API_URL;
    if (!pexelsApiKey || !pexelsApiUrl) {
      throw new Error("Pexels API key or Pexels API URL is required");
    }

    const response = await fetch(
      `${process.env.PEXELS_API_URL}/search?query=${encodeURIComponent(
        keyword
      )}&per_page=${perPage}&page=${page}&orientation=landscape`,
      {
        headers: {
          Authorization: process.env.PEXELS_API_KEY,
        },
      }
    );

    if (!response.ok) {
      strapi.log.error(
        `Pexels API error for keyword "${keyword}": ${response.status} ${response.statusText}`
      );
      throw new Error(
        `Pexels API error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    if (data.photos?.length > 0) {
      // Transform response data to match schema
      const transformedImages = data.photos.map((photo) => ({
        photographer: photo.photographer,
        photographer_url: photo.photographer_url,
        original_url: photo.src.original,
        large_url: photo.src.large,
        medium_url: photo.src.medium,
        small_url: photo.src.small,
        alt_text: photo.alt,
        provider: IMAGE_PROVIDER.PEXELS,
        keyword: keyword.toLowerCase(), // Store keyword for mapping creation
      }));
      return transformedImages;
    } else {
      strapi.log.info(`No images found for keyword: ${keyword}`);
      return [];
    }
  },
  /**
   * Fetch images from API based on keywords from interest table
   * @param {number} perPage - Number of images per page (default: 12, max: 80)
   * @param {number} page - Page number (default: 1)
   * @returns {Promise<Array>} Array of image objects
   */
  async fetchImagesFromPexels(perPage = 12, page = 1) {
    try {
      // Determine cursor from the latest keyword mapping (by createdAt)
      const latestMapping = await strapi.db
        .query("api::image-keyword-mapping.image-keyword-mapping")
        .findOne({
          select: ["keyword", "createdAt"],
          orderBy: { createdAt: "desc" },
        });

      const cursorKeyword = latestMapping
        ? String(latestMapping.keyword || "").toLowerCase()
        : null;

      // Resolve the interest id for the cursor keyword
      let cursorInterestId = null;
      if (cursorKeyword) {
        const cursorInterest = await strapi.db
          .query("api::interest.interest")
          .findOne({
            where: { interest: { $eqi: cursorKeyword } },
            select: ["id", "interest"],
          });
        if (cursorInterest) {
          cursorInterestId = cursorInterest.id;
        }
      }
      // Get interests with id greater than the cursor interest id (created after that row)
      const interests = await strapi.entityService.findMany(
        "api::interest.interest",
        {
          fields: ["interest"],
          filters: {
            publishedAt: { $notNull: true },
            ...(cursorInterestId && {
              id: { $gt: cursorInterestId },
            }),
          },
          sort: { id: "asc" },
        }
      );

      if (!interests || interests.length === 0) {
        throw new Error(
          "No new interests found to process (all interests already have image keyword mappings)"
        );
      }

      strapi.log.info(
        `Found ${interests.length} interests to process using cursor keyword ${
          cursorKeyword ?? "<none>"
        } (cursor interest id: ${cursorInterestId ?? "<none>"})`
      );

      const allImages = [];

      // Fetch images for each new interest
      for (const interest of interests) {
        try {
          const keyword = interest.interest.toLowerCase();
          strapi.log.info(`Fetching images for keyword: ${keyword}`);

          const transformedImages = await this.invokePexelsApi(
            keyword,
            perPage,
            page
          );
          if (transformedImages.length > 0) {
            allImages.push(...transformedImages);
            strapi.log.info(
              `Fetched ${transformedImages.length} images for keyword: ${keyword}`
            );
          } else {
            strapi.log.info(`No images found for keyword: ${keyword}`);
          }
          // Backoff: a small delay to respect rate limits
          await new Promise((resolve) => setTimeout(resolve, 100));
        } catch (error) {
          strapi.log.error(
            `Error fetching images for keyword "${interest.interest}":`,
            error
          );
        }
      }

      return allImages;
    } catch (error) {
      strapi.log.error("Error in fetchImagesFromPexels:", error);
      strapi.plugin("sentry").service("sentry").sendError(error);
      throw error;
    }
  },

  /**
   * Fetch and save images for an interest (for interest afterUpdate lifecycle)
   * @param {number} interestId - Interest ID
   * @returns {Promise<void>} Void
   */
  async fetchAndSaveImagesForInterest(interestId) {
    try {
      const interest = await strapi.entityService.findOne(
        "api::interest.interest",
        interestId
      );
      //== check if keyword has images
      const keyword = interest.interest.toLowerCase();
      const imageCount = await this.imageCountByKeyword(keyword);
      if (imageCount > 0) {
        strapi.log.info(
          `Interest ${interestId} already has ${imageCount} images`
        );
        return;
      }
      strapi.log.info(
        `Fetching images for keyword: ${keyword} for interest ${interestId}`
      );

      const transformedImages = await this.invokePexelsApi(keyword, 24, 1);
      if (transformedImages.length > 0) {
        const savedImages = await this.saveImagesToDatabase(transformedImages);
        strapi.log.info(
          `Saved ${savedImages.length} images to database for interest ${interestId}`
        );
      } else {
        strapi.log.info(`No images found for interest: ${interestId}`);
      }
    } catch (error) {
      strapi.log.error("Error in fetchAndSaveImagesForInterest:", error);
      strapi.plugin("sentry").service("sentry").sendError(error);
      throw error;
    }
  },

  /**
   * Save fetched images to the database and create keyword mappings
   * @param {Array} images - Array of image objects
   * @returns {Promise<Array>} Array of saved image entities
   */
  async saveImagesToDatabase(images) {
    try {
      const savedImages = [];
      for (const imageData of images) {
        try {
          //== Check if image already exists (based on original_url)
          const existingImage = await this.findImageByOriginalUrl(
            imageData.original_url
          );

          if (existingImage && existingImage.length > 0) {
            strapi.log.info(`Image already exists: ${imageData.original_url}`);
            //== check if image keyword mapping exists is same as imageData.keyword
            const imageKeywordMapping = await this.findImageKeywordMapping(
              existingImage[0].id,
              imageData.keyword.toLowerCase()
            );
            if (imageKeywordMapping && imageKeywordMapping.length > 0) {
              strapi.log.info(
                `Image keyword mapping already exists: ${imageData.keyword}`
              );
              continue;
            } else {
              //== create image keyword mapping if image keyword mapping does not exist
              await this.createImageKeywordMapping(
                existingImage[0].id,
                imageData.keyword.toLowerCase()
              );
              continue;
            }
          }

          //== Remove keyword from imageData before creating image
          const { keyword, ...imageDataWithoutKeyword } = imageData;

          //== Create new image entry and keyword mapping
          const savedImage = await this.createImage(imageDataWithoutKeyword);
          await this.createImageKeywordMapping(
            savedImage.id,
            keyword.toLowerCase()
          );
          savedImages.push(savedImage);
          strapi.log.info(`Saved image: ${imageData.original_url}`);
        } catch (error) {
          strapi.log.error(
            `Error saving image ${imageData.original_url}:`,
            error
          );
        }
      }

      return savedImages;
    } catch (error) {
      strapi.log.error("Error in saveImagesToDatabase:", error);
      strapi.plugin("sentry").service("sentry").sendError(error);
      throw error;
    }
  },

  /**
   * Find image by original URL
   * @param {string} originalUrl - Original URL
   * @returns {Promise<Array>} Array of image objects
   */
  async findImageByOriginalUrl(originalUrl) {
    return await strapi.entityService.findMany("api::image.image", {
      filters: { original_url: originalUrl },
    });
  },

  /**
   * Create image
   * @param {Object} imageData - Image data
   * @returns {Promise<Object>} Image object
   */
  async createImage(imageData) {
    return await strapi.entityService.create("api::image.image", {
      data: {
        ...imageData,
        publishedAt: new Date(),
      },
    });
  },

  /**
   * Find image keyword mapping
   * @param {number} imageId - Image ID
   * @param {string} keyword - Keyword
   * @returns {Promise<Array>} Array of image keyword mapping objects
   */
  async findImageKeywordMapping(imageId, keyword) {
    return await strapi.entityService.findMany(
      "api::image-keyword-mapping.image-keyword-mapping",
      { filters: { image: imageId, keyword: keyword } }
    );
  },

  /**
   * Create image keyword mapping
   * @param {number} imageId - Image ID
   * @param {string} keyword - Keyword
   */
  async createImageKeywordMapping(imageId, keyword) {
    await strapi.entityService.create(
      "api::image-keyword-mapping.image-keyword-mapping",
      {
        data: { image: imageId, keyword: keyword },
      }
    );
  },

  /**
   * Fetch and save images for all interests
   * @param {number} perPage - Number of images per page
   * @param {number} page - Page number
   * @returns {Promise<Object>} Result object with fetched and saved counts
   */
  async fetchAndSaveImages(perPage = 24, page = 1) {
    try {
      strapi.log.info("Starting image fetch and save process...");

      // Fetch images
      const fetchedImages = await this.fetchImagesFromPexels(perPage, page);
      strapi.log.info(`Fetched ${fetchedImages.length} images`);

      // Save images to database
      const savedImages = await this.saveImagesToDatabase(fetchedImages);
      strapi.log.info(`Saved ${savedImages.length} new images to database`);

      return {
        fetched: fetchedImages.length,
        saved: savedImages.length,
        images: savedImages,
      };
    } catch (error) {
      strapi.log.error("Error in fetchAndSaveImages:", error);
      strapi.plugin("sentry").service("sentry").sendError(error);
      throw error;
    }
  },

  /**
   * Get images by keyword from image table through mapping
   * Re-usable function
   * @param {Object} ctx
   * @returns {Object} Mapping Images object
   */
  async getImageMappings(keyword, start, limit) {
    try {
      strapi.log.info(`Searching images for keyword ${keyword}`);
      return await strapi.entityService.findMany(
        "api::image-keyword-mapping.image-keyword-mapping",
        {
          start: (start - 1) * limit,
          limit: limit,
          filters: {
            keyword: {
              $contains: keyword.toLowerCase(),
            },
          },
          populate: {
            image: {
              fields: [
                "id",
                "photographer",
                "photographer_url",
                "original_url",
                "large_url",
                "medium_url",
                "small_url",
                "alt_text",
                "provider",
                "publishedAt",
              ],
            },
          },
        }
      );
    } catch (error) {
      strapi.log.error("Error in getImageMappings:", error);
      strapi.plugin("sentry").service("sentry").sendError(error);
      throw error;
    }
  },

  /**
   * Find image by keyword
   * @param {string} keyword - Keyword
   * @returns {Promise<Array>} Array of image objects
   */
  async imageCountByKeyword(keyword) {
    return (
      await strapi.entityService.findMany("api::image.image", {
        filters: { keyword: keyword },
      })
    ).length;
  },
}));
