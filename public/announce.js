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
})