const lodash = require('lodash');
const fetch = require('node-fetch');
const { createModuleResolutionCache } = require("typescript");
const { Webhook, MessageBuilder } = require('discord-webhook-node');
// create new Webhook
const hook = new Webhook(
  `${process.env.OPEN_POSITIONS_DISCORD_WEBHOOK}`
);

hook.setUsername("New Applicant Notifier")
.setAvatar('https://avatars.githubusercontent.com/u/53379976?s=200&v=4');

// use markdown block code to format this as JSON
const formatJSON = (jsonData) => {
  return "```JSON\n" + JSON.stringify(jsonData, null, 1) + "\n```";
};



module.exports = {

  async beforeCreate(event) {
    // get the project associated with this applicant from the db
    const project = event.params.data.project;
    const applicantProject = await strapi.db.query('api::project.project').findOne({
      where: { id: project }
    });
    try {
      // insert slug and title into the applicant project obj
      const projectSlug = applicantProject.slug;
      event.model.attributes.project.slug = projectSlug;
      event.model.attributes.project.title = applicantProject.title;
    } 
    catch (e) {
      console.log(`couldn't find project slug for project ${project}`);
      event.model.attributes.project.slug = "";
    }
  },
  async afterCreate(event) {
    // insert proj title and remove unnecessary info from message
    event.params.data.project = event.model.attributes.project.title;
    var relevantInfo = lodash.omit(event.params.data, ['email', 'age', 'zip', 'createdBy', 'updatedBy', 'createdAt', 'updatedAt', 'publishedAt']);

    // create the discord message
    const newApplicantMsg = new MessageBuilder()
      .setTitle("New Applicant!")
      .setURL(`${process.env.FRONTEND_URL}/projects/${event.model.attributes.project.slug}`)
      .setDescription(
        formatJSON(relevantInfo)
      );

    hook.send(newApplicantMsg);
  },

}