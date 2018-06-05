//logic to send announcement requests
//adapted from request.js
const FIREBASE_STORAGE = firebase.storage();

let sendButton = document.getElementById('sendAnnouncement');
let announceTitle = document.getElementById('announcementTitle');
let announceMessage = document.getElementById('announcement');

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


//date
//if regular anonouncement:
let expirationDate = new Date();
let dd = expirationDate.getDate() + 1;
let mm = expirationDate.getMonth() + 1; //January is 0 so +1 is added to get the proper date
let yyyy = expirationDate.getFullYear();

if (dd < 10) {
    dd = '0'+ dd;
}
if (mm < 10) {
    mm = '0' + mm;
}
expirationDate = mm + '/' + dd + '/' + yyyy + ' 23:59:59';
//its value is updated in datepicker-directive.js, day after today by default

//send msg to database
function sendAnnouncement(title, announcement) {
	let startTime; //generate milliseconds for the starting point
	startTime=new Date().getTime();
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
			FIREBASE_DATABASE.ref('/requests/announcements/').push({
				//directs requests to specified club folder
				title: title,
				currentTime:startTime, //pushing current time variable
				org: org,
				orgType: orgType,
				message: announcement,
				userProfileImg: profileImg,
				expirationDate: (new Date(expirationDate)).toString()
			});
		});
}


//This is the DOM behind organization.html (below code)

//sidebar selections
//sidebar & button selections

let status = document.getElementsByClassName('modItem')[0];
let request = document.getElementsByClassName('modItem')[1];
let info = document.getElementsByClassName('modItem')[2];
let edit = document.getElementById('editOrg');
let cancel = document.getElementById('cancel');
let rTabs = document.getElementsByClassName('reqtab');
let rEvent = document.getElementById('reqEvent');
let rAnnounce = document.getElementById('reqAnnounce');

//module selections
let sMod = document.getElementById('status');
let rMod = document.getElementById('req');
let iMod = document.getElementById('org');
let eMod = document.getElementById('orgEdit');
//event listening, clicks
status.addEventListener('click', function(){
    sMod.className = "module";
    rMod.className = "module hide";
    iMod.className = "module hide";
    eMod.className = "module hide";
});
request.addEventListener('click', function(){
    sMod.className = "module hide";
    rMod.className = "module";
    iMod.className = "module hide";
    eMod.className = "module hide";
});
info.addEventListener('click', function(){
    sMod.className = "module hide";
    rMod.className = "module hide";
    iMod.className = "module";
    eMod.className = "module hide";
});
edit.addEventListener('click', function(){
    iMod.className = "module hide";
    eMod.className = "module";
});
cancel.addEventListener('click', function(){
    iMod.className = "module";
    eMod.className = "module hide";
});
rTabs[0].addEventListener('click', function(){
    rTabs[0].className = "reqTab reqTabOn";
    rTabs[1].className = "reqTab";
    rAnnounce.className = "requestSpace";
    rEvent.className = "requestSpace hide";
})
rTabs[1].addEventListener('click', function(){
    rTabs[1].className = "reqTab reqTabOn";
    rTabs[0].className = "reqTab";
    rAnnounce.className = "requestSpace hide";
    rEvent.className = "requestSpace";
})
