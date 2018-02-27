const functions = require('firebase-functions');
exports.AddEvent = functions.database.ref('/events').onWrite((event) => {
  const dataObj = event.data.val();
  console.log(event);
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
