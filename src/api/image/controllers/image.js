"use strict";

/**
 * image controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::image.image", ({ strapi }) => ({
  /**
   * Fetch images from Pexels API and save to database
   * Triggered on-demand for seeding images
   * @param {Object} ctx
   */
  async fetchFromPexels(ctx) {
    try {
      const { perPage = 24, page = 1 } = ctx.request.body;

      // Validate parameters
      const validatedPerPage = Math.min(Math.max(parseInt(perPage), 1), 80);
      const validatedPage = Math.max(parseInt(page), 1);

      const result = await strapi
        .service("api::image.image")
        .fetchAndSaveImages(validatedPerPage, validatedPage);

      ctx.body = {
        success: true,
        message: `Successfully fetched ${result.fetched} images and saved ${result.saved} new images`,
        data: result,
      };
    } catch (error) {
      ctx.status = 500;
      ctx.body = {
        success: false,
        message: "Error fetching images from Pexels",
        error: error.message,
      };
    }
  },

  /**
   * Get images by keyword from image table through mapping
   * Called from frontend apps
   * @param {Object} ctx
   */
  async getByKeyword(ctx) {
    try {
      const { keyword } = ctx.params;
      const { start = 1, limit = 12 } = ctx.request.query;
      if (!keyword) {
        ctx.status = 404;
        ctx.body = {
          success: false,
          message: "Keyword parameter is required",
        };
        return;
      }

      // Search for images by keyword contain for partial match
      const mappings = await strapi
        .service("api::image.image")
        .getImageMappings(keyword, start, limit);

      // Extract images from mappings
      const images = mappings
        .map((mapping) => mapping.image)
        .filter((image) => image && image.publishedAt) // Only include published images
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort by newest first

      ctx.body = {
        success: true,
        data: images,
        count: images.length,
      };
    } catch (error) {
      ctx.status = 500;
      ctx.body = {
        success: false,
        message: "Error fetching images by keyword",
        error: error.message,
      };
    }
  },
}));
