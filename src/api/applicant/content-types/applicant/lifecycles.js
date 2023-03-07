const _ = require('lodash');
const { createModuleResolutionCache } = require("typescript");
const { Webhook, MessageBuilder } = require('discord-webhook-node');
// TODO: install discord-webhook-node in npm
// create new Webhook
const hook = new Webhook(
  process.env.OPEN_POSITIONS_DISCORD_WEBHOOK
);

hook.setAuthor("New Applicant Notifier", 'https://avatars.githubusercontent.com/u/53379976?s=200&v=4');

const formatJSON = (jsonData) => {
  return `\`\`\`JSON\n${JSON.stringify(jsonData, null, 1)}\n\`\`\``;
};



module.exports = {

  async beforeCreate(event) {
    const project = event.params.data.project;
    const applicantProject = await strapi.db.query('api::project.project').findOne({
      where: { slug: project }
    });
    const projectID = applicantProject.id;
    event.params.data.project = projectID
  },
  async afterCreate(event) {
    // use event object https://docs.strapi.io/dev-docs/backend-customization/models#hook-event-object
    // FIXME: remove debug code
    console.log(event);

    const relevantInfo = _.omit(event.data.attributes, ['email', 'age', 'zip']);

    const newApplicantMsg = new MessageBuilder()
      .setTitle("New Applicant!")
      .setURL(`${process.env.FRONTEND_URL}/projects/${event.data.project}`)
      .setDescription(
        formatJSON(relevantInfo)
      );

    hook.send(newApplicantMsg);
  },

}