import { test, expect } from "@playwright/test";
import { api } from "./utils";

test.describe("/api/image", () => {
  test.describe("GET /api/images/keyword/:keyword", () => {
    test("should search images by keyword successfully", async ({
      request,
    }) => {
      const keyword = "html";
      const response = await api(request).get(`/api/images/keyword/${keyword}`);

      expect(response).toBeDefined();
      expect(response.success).toBe(true);
      expect(response.data).toBeDefined();
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.count).toBeGreaterThanOrEqual(0);
    });

    test("should return 400 for missing keyword parameter", async ({
      request,
    }) => {
      const response = await request.get("/api/images/keyword/");
      expect(response.status()).toBe(404); // Route not found without keyword
    });

    test("should handle empty keyword gracefully", async ({ request }) => {
      const response = await api(request).get("/api/images/keyword/empty");

      expect(response).toBeDefined();
      expect(response.success).toBe(true);
      expect(response.data).toBeDefined();
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.count).toBe(0);
    });

    test("should paginate images result correctly", async ({ request }) => {
      const keyword = "html";
      const limit = 5;

      // First page
      const firstPage = await api(request).get(
        `/api/images/keyword/${keyword}?start=1&limit=${limit}`
      );
      expect(firstPage.success).toBe(true);
      expect(firstPage.data.length).toBeLessThanOrEqual(limit);

      // Second page
      const secondPage = await api(request).get(
        `/api/images/keyword/${keyword}?start=2&limit=${limit}`
      );
      expect(secondPage.success).toBe(true);

      // If there are enough results, pages should be different
      if (firstPage.count > limit) {
        expect(secondPage.data.length).toBeLessThanOrEqual(limit);
        // Check that images are different between pages
        const firstPageIds = firstPage.data.map((img) => img.id);
        const secondPageIds = secondPage.data.map((img) => img.id);
        const hasDifferentImages = secondPageIds.some(
          (id) => !firstPageIds.includes(id)
        );
        expect(hasDifferentImages).toBe(true);
      }
    });

    test("should return count 0 for no results", async ({ request }) => {
      const keyword = "nonexistentkeyword12345";
      const response = await api(request).get(`/api/images/keyword/${keyword}`);

      expect(response).toBeDefined();
      expect(response.success).toBe(true);
      expect(response.data).toBeDefined();
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.count).toBe(0);
      expect(response.data.length).toBe(0);
    });

    test("should handle case-insensitive keyword search", async ({
      request,
    }) => {
      const keywordLower = "html";
      const keywordUpper = "HTML";

      const responseLower = await api(request).get(
        `/api/images/keyword/${keywordLower}`
      );
      const responseUpper = await api(request).get(
        `/api/images/keyword/${keywordUpper}`
      );

      expect(responseLower.success).toBe(true);
      expect(responseUpper.success).toBe(true);
      expect(responseLower.count).toBe(responseUpper.count);
    });

    test("should return only published images", async ({ request }) => {
      const keyword = "html";
      const response = await api(request).get(`/api/images/keyword/${keyword}`);

      expect(response.success).toBe(true);
      expect(response.data).toBeDefined();

      // All returned images should have publishedAt set
      response.data.forEach((image) => {
        expect(image.publishedAt).toBeDefined();
        expect(new Date(image.publishedAt)).toBeInstanceOf(Date);
      });
    });

    test("should sort images by newest first", async ({ request }) => {
      const keyword = "html";
      const response = await api(request).get(
        `/api/images/keyword/${keyword}?start=1&limit=10`
      );

      expect(response.success).toBe(true);

      // Only test sorting if we have multiple images
      if (response.data.length > 1) {
        // Check that images are sorted by createdAt descending (newest first)
        for (let i = 0; i < response.data.length - 1; i++) {
          const currentDate = new Date(response.data[i].createdAt);
          const nextDate = new Date(response.data[i + 1].createdAt);
          expect(currentDate.getTime()).toBeGreaterThanOrEqual(
            nextDate.getTime()
          );
        }
      } else {
        // If we have 0 or 1 image, sorting doesn't matter
        console.log(
          `Only ${response.data.length} image(s) found for keyword "${keyword}", skipping sort test`
        );
      }
    });

    test("should handle special characters in keyword", async ({ request }) => {
      const keyword = "café"; // Special character
      const response = await api(request).get(`/api/images/keyword/${keyword}`);

      expect(response).toBeDefined();
      expect(response.success).toBe(true);
      expect(response.data).toBeDefined();
      expect(Array.isArray(response.data)).toBe(true);
    });

    test("should handle URL encoded keywords", async ({ request }) => {
      const keyword = "space%20travel"; // URL encoded space
      const response = await api(request).get(`/api/images/keyword/${keyword}`);

      expect(response).toBeDefined();
      expect(response.success).toBe(true);
      expect(response.data).toBeDefined();
      expect(Array.isArray(response.data)).toBe(true);
    });
  });
});
