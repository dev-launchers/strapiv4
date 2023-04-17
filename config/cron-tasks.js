const GoogleCalendarTask = require('./cron-tasks/googleCalendar');

module.exports = {
   myJob: {
      task: ({ strapi }) => {
        GoogleCalendarTask.start()
      },
      options: {
        rule: "*/1 * * * *",
      },
    },
  };