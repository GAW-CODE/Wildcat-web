var config = {
    apiKey: "AIzaSyAOCBR_8j5Uf59kPrJeNKmyhm5kkdVUJWo",
    authDomain: "gaw-wildcat-app.firebaseapp.com",
    databaseURL: "https://gaw-wildcat-app.firebaseio.com",
    projectId: "gaw-wildcat-app",
    storageBucket: "gaw-wildcat-app.appspot.com",
    messagingSenderId: "467203906935"
  };
  firebase.initializeApp(config);
  var FIREBASE_DATABASE = firebase.database();
  const FIREBASE_AUTH = firebase.auth();
  let eventSent = document.getElementById("eventSent");
  eventSent.style.display = "none";

const submit = document.getElementById('btn-send');
submit.addEventListener('click', e => {
	const txtorganization = document.getElementById("txtOrganization");
	const txteventName = document.getElementById("name");
	const txtlocation = document.getElementById("location");
	const txtdescription = document.getElementById("description");
	const txtdate = document.getElementById("date");
	const txtstartTime = document.getElementById("starttime");
	const txtendTime = document.getElementById("endtime");
	const org = txtorganization.value;
	const name = txteventName.value;
	const location = txtlocation.value;
	const description = txtdescription.value;
	const date = txtdate.value;
	const StartTime = txtstartTime.value;
	const EndTime = txtendTime.value;
	if(org == "" || name == "" || location == "" || description == "" || date == "" || StartTime == "" || EndTime == ""){
		alert("Please fill out all necessary information")
	}
	else{
		sendEvent(org, name, location, description, date, StartTime, EndTime);
		eventSent.style.display = "block";
	}

});
function sendEvent(org, name, location, description, date, EndTime, StartTime) {
			FIREBASE_DATABASE.ref('/requests/events').push({
				name: name,
				org: org,
				location: location,
				description: description,
				date: date,
				EndTime: EndTime,
				StartTime: StartTime
			});
		};
//onsSubmit -> send info to database, tell user your event has been received

/*
2. Send request to admin.html screen (take info from database)
3. Admin approves / rejects event request (thru the admin.html page)
	If approve -> display event on official calendar
	If reject -> send event back to campus org w/ explanation for rejection
*/
