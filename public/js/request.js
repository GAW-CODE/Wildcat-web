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
var uploadFile = document.getElementById('uploadFile');
var preview = document.getElementById('preview');
let btnLocation = document.getElementById('location');
let btnLocation1 = document.getElementById('location1');
let selLocationBtn = document.getElementById('selLocation');

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
const FIREBASE_DATABASE = firebase.database();
const FIREBASE_STORAGE = firebase.storage();

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
				userProfileImg: profileImg,
				expirationDate: (new Date(expirationDate)).toString()
			});
		});
}

//file upload
uploadFile.addEventListener('change', function (e) {
    document.getElementById('uploader').style.display = 'block';
    var file = e.target.files[0];
    //Create a storage ref
    var storageRef = firebase.storage().ref('/announcements/' + file.name);
    //Upload file
    var task = storageRef.put(file);
    //Update progress bar
    task.on('state_changed',
        function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
        },
        function error(err) {

        },
        function complete() {

        }
    );
    FIREBASE_STORAGE.ref('/upload/' + file.name).on('child_added', function (snapshot) {
        console.log(snapshot.val());
        preview = snapshot.val();
    });
});

//map
let map = L.map('map', {
    maxZoom: 3,
    crs: L.CRS.Simple
});
let bounds = [[0, 0], [700, 850]];
let image = L.imageOverlay('School Map 2.png', bounds).addTo(map);

map.fitBounds(bounds);

const x = 20
const y = 40
//1a
var sol = L.latLng([y, x]);
L.marker(sol).addTo(map);


btnLocation.addEventListener('click', function () {
    document.getElementById('map').style.visibility = "visible";
    document.getElementById('location1').style.display = "block";
    document.getElementById('dropbtn').style.display = "block";
    document.getElementById('location').style.display = "none";
})
btnLocation1.addEventListener('click', function () {
    document.getElementById('map').style.visibility = "hidden";
    document.getElementById('location1').style.display = "none";
    document.getElementById('dropbtn').style.display = "none";
    document.getElementById('location').style.display = "block";
})


//dropdown menu for selecting location
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

//when block a is clicked, open sub categories
let blockA = document.getElementById("blockA");
let blockASub = document.getElementById("blockASub");

let blockB = document.getElementById("blockB");
let blockBSub = document.getElementById("blockBSub");

let blockC = document.getElementById("blockC");
let blockCSub = document.getElementById("blockCSub");

let blockD = document.getElementById("blockD");
let blockDSub = document.getElementById("blockDSub");

let blockE = document.getElementById("blockE");
let blockESub = document.getElementById("blockESub");

let blockF = document.getElementById("blockF");
let blockFSub = document.getElementById("blockFSub");

let blockG = document.getElementById("blockG");
let blockGSub = document.getElementById("blockGSub");

let other = document.getElementById("other");
let otherSub = document.getElementById("otherSub");

//when clicking a category, show its sub categories and close out of other open ones to preserve space

blockA.addEventListener('click', function(){
	  closeOtherSub();
    blockASub.className="show";
});

blockB.addEventListener('click', function(){
	 closeOtherSub();
    blockBSub.className="show";
});

blockC.addEventListener('click', function(){
	  closeOtherSub();
    blockCSub.className="show";
});
blockD.addEventListener('click', function(){
	  closeOtherSub();
    blockDSub.className="show";
});
blockE.addEventListener('click', function(){
	  closeOtherSub();
    blockESub.className="show";
});
blockF.addEventListener('click', function(){
	  closeOtherSub();
    blockFSub.className="show";
});
blockG.addEventListener('click', function(){
	  closeOtherSub();
    blockGSub.className="show";
});
other.addEventListener('click', function(){
	  closeOtherSub();
    otherSub.className="show";
});

function closeOtherSub()
{
	blockASub.className = "hide";
	blockBSub.className = "hide";
	blockCSub.className = "hide";
	blockDSub.className = "hide";
	blockESub.className = "hide";
	blockFSub.className = "hide";
	blockGSub.className = "hide";
	otherSub.className = "hide";
}

let a1A = document.getElementById("A1A");
let a1B = document.getElementById("A1B");
let a2 = document.getElementById("A2");
let a3 = document.getElementById("A3");
let a3B = document.getElementById("A3B");
let a4 = document.getElementById("A4");

let b2 = document.getElementById("B2");
let b3 = document.getElementById("B3");
let b4 = document.getElementById("B4");
let b5 = document.getElementById("B5");
let b6A = document.getElementById("B6A");
let b6B = document.getElementById("B6B");
let b7 = document.getElementById("B7");
let b8 = document.getElementById("B8");
let b9 = document.getElementById("B9");
let b10 = document.getElementById("B10");
let b11 = document.getElementById("B11");
let b12 = document.getElementById("B12");
let b18 = document.getElementById("B18");
let b20 = document.getElementById("B20");
let b22 = document.getElementById("B22");
let b23 = document.getElementById("B23");
let b26 = document.getElementById("B26");
let b27 = document.getElementById("B27");

//set markers
// TODO: insert proper location in between marker([])
a1A.addEventListener('click', function(){
	let marker = L.latLng([100,100]);
	L.marker(marker).addTo(map);
});
a1B.addEventListener('click', function(){
	let marker = L.latLng([200,200]);
	L.marker(marker).addTo(map);
});
a2.addEventListener('click', function(){
	let marker = L.latLng([150,150]);
	L.marker(marker).addTo(map);
});
a3.addEventListener('click', function(){
	let marker = L.latLng([]);
	L.marker(marker).addTo(map);
});
a3B.addEventListener('click', function(){
	let marker = L.latLng([]);
	L.marker(marker).addTo(map);
});
a4.addEventListener('click', function(){
		let marker = L.latLng([]);
		L.marker(marker).addTo(map);
});


b2.addEventListener('click', function(){
		let marker = L.latLng([]);
		L.marker(marker).addTo(map);
});
b3.addEventListener('click', function(){
		let marker = L.latLng([]);
		L.marker(marker).addTo(map);
});
b4.addEventListener('click', function(){
		let marker = L.latLng([]);
		L.marker(marker).addTo(map);
});
b5.addEventListener('click', function(){
		let marker = L.latLng([]);
		L.marker(marker).addTo(map);
});
b6A.addEventListener('click', function(){
		let marker = L.latLng([]);
		L.marker(marker).addTo(map);
});
b6B.addEventListener('click', function(){
		let marker = L.latLng([]);
		L.marker(marker).addTo(map);
});
b7.addEventListener('click', function(){
		let marker = L.latLng([]);
		L.marker(marker).addTo(map);
});
b8.addEventListener('click', function(){
		let marker = L.latLng([]);
		L.marker(marker).addTo(map);
});
b9.addEventListener('click', function(){
		let marker = L.latLng([]);
		L.marker(marker).addTo(map);
});
b10.addEventListener('click', function(){
		let marker = L.latLng([]);
		L.marker(marker).addTo(map);
});
b11.addEventListener('click', function(){
		let marker = L.latLng([]);
		L.marker(marker).addTo(map);
});
b12.addEventListener('click', function(){
		let marker = L.latLng([]);
		L.marker(marker).addTo(map);
});
b18.addEventListener('click', function(){
		let marker = L.latLng([]);
		L.marker(marker).addTo(map);
});
b20.addEventListener('click', function(){
		let marker = L.latLng([]);
		L.marker(marker).addTo(map);
});
b22.addEventListener('click', function(){
		let marker = L.latLng([]);
		L.marker(marker).addTo(map);
});
b23.addEventListener('click', function(){
		let marker = L.latLng([]);
		L.marker(marker).addTo(map);
});
b26.addEventListener('click', function(){
		let marker = L.latLng([]);
		L.marker(marker).addTo(map);
});
b27.addEventListener('click', function(){
		let marker = L.latLng([]);
		L.marker(marker).addTo(map);
});
