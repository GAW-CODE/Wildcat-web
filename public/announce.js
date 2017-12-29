// Initialize Firebase
		  var config = {
		    apiKey: "AIzaSyAOCBR_8j5Uf59kPrJeNKmyhm5kkdVUJWo",
		    authDomain: "gaw-wildcat-app.firebaseapp.com",
		    databaseURL: "https://gaw-wildcat-app.firebaseio.com",
		    projectId: "gaw-wildcat-app",
		    storageBucket: "gaw-wildcat-app.appspot.com",
		    messagingSenderId: "467203906935"
		  };
		  firebase.initializeApp(config);

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();

messaging.requestPermission()
	.then(function() {
  		console.log('Notification permission granted.');
  		return messaging.getToken();
	  // TODO(developer): Retrieve an Instance ID token for use with FCM.
	  // ...
	})
	.then(function(token){
		console.log(token);
	})
	.catch(function(err) {
	  console.log('Unable to get permission to notify.', err);
	});
// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
  // Get Instance ID token. Initially this makes a network call, once retrieved
  // subsequent calls to getToken will return from cache.
  messaging.getToken()
  .then(function(currentToken) {
    if (currentToken) {
      sendTokenToServer(currentToken);
      updateUIForPushEnabled(currentToken);
    } else {
      // Show permission request.
      console.log('No Instance ID token available. Request permission to generate one.');
      // Show permission UI.
      updateUIForPushPermissionRequired();
      setTokenSentToServer(false);
    }
  })
  .catch(function(err) {
    console.log('An error occurred while retrieving token. ', err);
    showToken('Error retrieving Instance ID token. ', err);
    setTokenSentToServer(false);
  });


// Callback fired if Instance ID token is updated.
messaging.onTokenRefresh(function() {
  messaging.getToken()
  .then(function(refreshedToken) {
    console.log('Token refreshed.');
    // Indicate that the new Instance ID token has not yet been sent to the
    // app server.
    setTokenSentToServer(false);
    // Send Instance ID token to app server.
    sendTokenToServer(refreshedToken);
    // ...
  })
  .catch(function(err) {
    console.log('Unable to retrieve refreshed token ', err);
    showToken('Unable to retrieve refreshed token ', err);
  });
});

