const { google } = require('googleapis');

const calendar = google.calendar({
  version: 'v3',
  auth: process.env.GOOGLE_CALENDAR_API_KEY
})

/**
 * Lists the next 10 events on the user's primary calendar.
 */
async function listEvents() {
  try {
      console.log('Start events querying...')
      // Set beginning of query to 3 pm tomorrow
      const tomorrow3pm = new Date();
      const day = new Date()
      tomorrow3pm.setDate(day.getDate());
      tomorrow3pm.setHours(15, 0, 0);

      // Set end of query to 4 pm in 90 days
      const future4pm = new Date();
      future4pm.setDate(day.getDate() + 90);
      future4pm.setHours(16, 0, 0);

      const res = await calendar.events.list({
        calendarId: 'primary',
        timeMin: new Date(tomorrow3pm).toISOString(), 
        timeMax: new Date(future4pm).toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
      });
      console.log(res)
      const events = res.data.items;
      if (!events || events.length === 0) {
        console.log('No upcoming events found.');
        return;
      }
      console.log('Upcoming 10 events:');
      events.map((event, i) => {
        const start = event.start.dateTime || event.start.date;
        console.log(`${start} - ${event.summary}`);
      });

      return events.data;
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = {
    start: () => {
        const events = listEvents()
        if (!events.length) return
        // TODO: dicord notify
    }
}