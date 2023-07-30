module.exports = {
  async afterCreate(event) {
    console.log(event.params.data)

    await strapi.plugins['email'].services.email.send({
      to: event.params.data.email,
      from: 'support@devlaunchers.com',
      // subject: 'The Strapi Email plugin worked successfully',
      template_id: 'd-4671f2012b484ba9890d4bb6a24bc6f3',
      dynamic_template_data: {
        username: event.params.data.username,
      },
    });
  },
};
