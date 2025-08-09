"use strict";

/**
 * image service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::image.image", ({ strapi }) => ({
  /**
   * Fetch images from API based on keywords from interest table
   * @param {number} perPage - Number of images per page (default: 12, max: 80)
   * @param {number} page - Page number (default: 1)
   * @returns {Promise<Array>} Array of image objects
   */
  async fetchImagesFromPexels(perPage = 12, page = 1) {
    try {
      // Get all interests from the database
      const interests = await strapi.entityService.findMany(
        "api::interest.interest",
        {
          fields: ["interest"],
          filters: {
            publishedAt: { $notNull: true },
          },
        }
      );

      if (!interests || interests.length === 0) {
        strapi.log.info("No interests found in database");
        return [];
      }

      const pexelsApiKey = process.env.PEXELS_API_KEY;
      const pexelsApiUrl = process.env.PEXELS_API_URL;

      if (!pexelsApiKey || !pexelsApiUrl) {
        strapi.log.error(
          "PEXELS_API_KEY or PEXELS_API_URL environment variable is not set"
        );
        throw new Error("Pexels API key or Pexels API URL is required");
      }

      const allImages = [];

      // Fetch images for each interest
      for (const interest of interests) {
        try {
          const keyword = interest.interest.toLowerCase();
          strapi.log.info(`Fetching images for keyword: ${keyword}`);

          const response = await fetch(
            `${pexelsApiUrl}/search?query=${encodeURIComponent(
              keyword
            )}&per_page=${perPage}&page=${page}`,
            {
              headers: {
                Authorization: pexelsApiKey,
              },
            }
          );

          if (!response.ok) {
            strapi.log.error(
              `Pexels API error for keyword "${keyword}": ${response.status} ${response.statusText}`
            );
            continue;
          }

          const data = await response.json();

          if (data.photos && data.photos.length > 0) {
            // Transform response data to match schema
            const transformedImages = data.photos.map((photo) => ({
              photographer: photo.photographer,
              photographer_url: photo.photographer_url,
              original_url: photo.src.original,
              large_url: photo.src.large,
              medium_url: photo.src.medium,
              small_url: photo.src.small,
              keyword: keyword.toLowerCase(), // Store keyword for mapping creation
            }));

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
  async fetchAndSaveImages(perPage = 12, page = 1) {
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
      throw error;
    }
  },
}));
