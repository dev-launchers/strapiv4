module.exports = {
  async afterCreate(event) {
    await strapi.plugins['email'].services.email.send({
      to: event.params.data.email,
      from: 'support@devlaunchers.com',
      subject: 'The Strapi Email plugin worked successfully',
      text: 'Hello world!',
      html: 'Hello world!',
    });
  },
};
