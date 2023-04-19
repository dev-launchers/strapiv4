const eventReminder = require('./cron-tasks/eventReminder');

module.exports = {
   myJob: {
      task: ({ strapi }) => {
        eventReminder.start()
      },
      options: {
        rule: "*/1 * * * *",
      },
    },
  };