module.exports = {
  routes: [
    // Endpoint 1: Fetch images from Pexels and save to database (on-demand seeding)
    {
      method: 'POST',
      path: '/images/fetch-from-pexels',
      handler: 'image.fetchFromPexels',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    // Endpoint 2: Get images by keyword from image table (frontend usage)
    {
      method: 'GET',
      path: '/images/keyword/:keyword',
      handler: 'image.getByKeyword',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
