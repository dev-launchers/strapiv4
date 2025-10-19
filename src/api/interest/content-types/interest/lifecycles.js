module.exports = {
  async afterUpdate(event) {
    try {
      const { id } = event.result;
      await strapi
        .service("api::image.image")
        .fetchAndSaveImagesForInterest(id);
    } catch (error) {
      console.error(
        "Error: Image fetch and save failed in interest afterUpdate:",
        error
      );
    }
  },
};
