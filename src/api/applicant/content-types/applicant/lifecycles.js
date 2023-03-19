const _ = require('lodash');
const fetch = require('node-fetch');
const { createModuleResolutionCache } = require("typescript");
const { Webhook, MessageBuilder } = require('discord-webhook-node');
// create new Webhook
const hook = new Webhook(
  `${process.env.OPEN_POSITIONS_DISCORD_WEBHOOK}`
);

hook.setUsername("New Applicant Notifier")
.setAvatar('https://avatars.githubusercontent.com/u/53379976?s=200&v=4');

const formatJSON = (jsonData) => {
  return `\`\`\`JSON\n${JSON.stringify(jsonData, null, 1)}\n\`\`\``;
};



module.exports = {

  async beforeCreate(event) {
    const project = event.params.data.project;
    const applicantProject = await strapi.db.query('api::project.project').findOne({
      where: { id: project }
    });
    try {
      const projectSlug = applicantProject.slug;
      event.model.attributes.project.slug = projectSlug
    } 
    catch (e) {
      console.log("couldn't find project slug")
      event.model.attributes.project.slug = ""
    }
  },
  async afterCreate(event) {
    // use event object https://docs.strapi.io/dev-docs/backend-customization/models#hook-event-object
    const relevantInfo = _.omit(event.params.data, ['email', 'age', 'zip', 'createdBy', 'updatedBy', 'createdAt', 'updatedAt', 'publishedAt']);

    const newApplicantMsg = new MessageBuilder()
      .setTitle("New Applicant!")
      .setURL(`${process.env.FRONTEND_URL}/projects/${event.model.attributes.project.slug}`)
      .setDescription(
        formatJSON(relevantInfo)
      );

    hook.send(newApplicantMsg);
  },

}