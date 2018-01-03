var config = {
    apiKey: "AIzaSyAOCBR_8j5Uf59kPrJeNKmyhm5kkdVUJWo",
    authDomain: "gaw-wildcat-app.firebaseapp.com",
    databaseURL: "https://gaw-wildcat-app.firebaseio.com",
    projectId: "gaw-wildcat-app",
    storageBucket: "gaw-wildcat-app.appspot.com",
    messagingSenderId: "467203906935"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

const submit = document.getElementById('btn-send');
submit.addEventListener('click', e => {
	const txtorganization = document.getElementById("txtOrganization");
	const txteventName = document.getElementById("name");
	const txtlocation = document.getElementById("location");
	const txtdescription = document.getElementById("description");
	const txtdate = document.getElementById("date");
	const txtstartTime = document.getElementById("starttime");
	const txtendTime = document.getElementById("endtime");
	const eventObj = {
		organization: txtorganization.value,
		name: txteventName.value,
		location: txtlocation.value,
		description: txtdescription.value,
		date: txtdate.value,
		startTime: txtstartTime.value,
		endTime: txtendTime.value
	};
	database.ref('events/').set(eventObj).
		then(
            function() {
                console.log('Event data successfully stored');
            }).catch(function(error) {
                console.log(error);
            });
});

//onsSubmit -> send info to database, tell user your event has been received

/*
2. Send request to admin.html screen (take info from database)
3. Admin approves / rejects event request (thru the admin.html page)
	If approve -> display event on official calendar
	If reject -> send event back to campus org w/ explanation for rejection
*/