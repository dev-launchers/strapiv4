const _ = require('lodash');
const fetch = require('node-fetch');
const { createModuleResolutionCache } = require("typescript");
const { Webhook, MessageBuilder } = require('discord-webhook-node');
// create new Webhook
const hook = new Webhook(
  "https://discordapp.com/api/webhooks/1083479577948598312/RoNhOrLetIdId_t4OPewef0mlJ28aLczRW-YCGGmqYmm9KSF0IJTXkMa9QglKQR2xOaM"
);

hook.setUsername("New Applicant Notifier")
.setAvatar('https://avatars.githubusercontent.com/u/53379976?s=200&v=4');

const formatJSON = (jsonData) => {
  return `\`\`\`JSON\n${JSON.stringify(jsonData, null, 1)}\n\`\`\``;
};



module.exports = {

  async beforeCreate(event) {
    console.log("event as a whole");
    console.log(event);

    const project = event.params.data.project;
    console.log("project");
    console.log(project);
    const applicantProject = await strapi.db.query('api::project.project').findOne({
      where: { id: project }
    });
    console.log("applicantProject");
    console.log(applicantProject);
    try {
      const projectSlug = applicantProject.slug;
      event.model.attributes.project.slug = projectSlug
    } 
    catch (e) {
      console.log("couldn't find project slug")
    }
  },
  async afterCreate(event) {
    // use event object https://docs.strapi.io/dev-docs/backend-customization/models#hook-event-object
    // FIXME: remove debug code
    console.log(event);
    console.log(event.model.attributes.project);

    const relevantInfo = _.omit(event.model.attributes, ['email', 'age', 'zip']);

    const newApplicantMsg = new MessageBuilder()
      .setTitle("New Applicant!")
      .setURL(`https://www.example.com/projects/${event.model.attributes.project.slug}`);
      // .setDescription(
      //   formatJSON(relevantInfo)
      // );

    hook.send(newApplicantMsg);
    // hook.send("test");
    console.log(typeof process.env.OPEN_POSITIONS_DISCORD_WEBHOOK);
    console.log(`test`);
    // fetch("https://discordapp.com/api/webhooks/1083479577948598312/RoNhOrLetIdId_t4OPewef0mlJ28aLczRW-YCGGmqYmm9KSF0IJTXkMa9QglKQR2xOaM", {
    //   "method": "POST",
    //   "headers": {
    //     "content-type": "application/json"
    //   },
    //   "body": JSON.stringify(newApplicantMsg)
    // })
    // .catch(e => {
    //   console.log(e)
    // })
  },

}