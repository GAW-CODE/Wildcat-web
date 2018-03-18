var event = {
  'summary': name,
  'Organization': org,
  'location': location,
  'description': description,
  'start': {
    'dateTime': date + 'T' + startTime,
    'timeZone': 'America/Los_Angeles',
  },
  'end': {
    'dateTime': date + 'T' + startTime,
    'timeZone': 'America/Los_Angeles',
  },
};

calendar.events.insert({
  auth: auth,
  calendarId: 'fjk6cu6719g51e912al0fpht98@group.calendar.google.com',
  resource: event,
}, function(err, event) {
  if (err) {
    console.log('There was an error contacting the Calendar service: ' + err);
    return;
  }
  console.log('Event created: %s', event.htmlLink);
});
}
