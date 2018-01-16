/*
const calendarEvent = document.getElementById('calendarEvent');

calendarEvent.addEventListener('click', e => {
	window.location.href = "calendarRequest.html";
});
*/

//interface js goes below
var dateButton = document.getElementById('calendarEvent');
var dateInputBlock = document.getElementById('date');
var sendButton = document.getElementById('send');
var announceTitle = document.getElementById('txtName');
var announceMessage = document.getElementById('announcement');

dateButton.addEventListener('click', function(){
	if(dateInputBlock.className == 'hide'){
		dateInputBlock.className = 'show';
	}
	else{
		dateInputBlock.className = 'hide';
	}
});

var charCount = document.getElementById("chars");
announceMessage.addEventListener('change', function(e) {
	charCount.innerHTML = e.target.value.length;
});

sendButton.addEventListener('click', function(e) {
	e.preventDefault();

	const title = announceTitle.value;
	const announcement = announceMessage.value;

	if(title == ""){
		alert("You must include a title");
	}
	if(announcement == ""){
		alert("You must include a message");
	}

	sendAnnouncement(title, announcement);
	announceMessage.value = "";
	announceTitle.value = "";

	//display "Message successfully sent" if this is true
});

//announcements logic
const FIREBASE_AUTH = firebase.auth();
//const FIREBASE_MESSAGING = firebase.messaging();
const FIREBASE_DATABASE = firebase.database();

//send msg to database
function sendAnnouncement(title, announcement) {
	const uid = FIREBASE_AUTH.currentUser.uid;
	const profileImg = FIREBASE_AUTH.currentUser.photoURL != null ? FIREBASE_AUTH.currentUser.photoURL : 'https://developers.google.com/experts/img/user/user-default.png';
	let org, orgType;

	FIREBASE_DATABASE.ref('/users/' + FIREBASE_AUTH.currentUser.uid).once('value')
		.then((snapshot) => {
			org = snapshot.val().organization;
			orgType = snapshot.val().type;
			console.log(org);
			console.log(orgType);
		})
		.then(() => {
			FIREBASE_DATABASE.ref('/requests/announcements').push({
				title: title,
				org: org,
				orgType: orgType,
				message: announcement,
				userProfileImg: profileImg
			});
		});
}
