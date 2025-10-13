module.exports = {
  async afterUpdate(event) {
    const { id } = event.result;
    await strapi.service("api::image.image").fetchAndSaveImagesForInterest(id);
  },
};
