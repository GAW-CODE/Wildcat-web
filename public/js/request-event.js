// JavaScript source code
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
let A1 = document.getElementById('A1');

var charCount = document.getElementById("chars");
announceMessage.addEventListener('change', function (e) {
    charCount.innerHTML = e.target.value.length;
});

sendButton.addEventListener('click', function (e) {
    e.preventDefault();

    const title = announceTitle.value;
    const announcement = announceMessage.value;

    if (title == "") {
        alert("You must include a title");
    }
    if (announcement == "") {
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
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}
expirationDate = mm + '/' + dd + '/' + yyyy + ' 23:59:59';
//its value is updated in datepicker-directive.js, day after today by default

//send msg to database
function sendAnnouncement(title, announcement) {
    let startTime; //generate milliseconds for the starting point
    startTime = new Date().getTime();
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
            FIREBASE_DATABASE.ref('/requests/events/' + org).push({
                //directs requests to specified club folder
                title: title,
                currentTime: startTime, //pushing current time variable
                org: org,
                orgType: orgType,
                message: announcement,
                userProfileImg: profileImg,
                expirationDate: (new Date(expirationDate)).toString(),
                location: loca,
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
    document.getElementById('myDropdown').style.display = "none";
    document.getElementById('location').style.display = "block";
})


//dropdown menu for selecting location
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").style.display = "block";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        let dropdowns = document.getElementsByClassName("dropdown-content");
        /*	let subDrops = document.getElementsByClassName("dropdown-sub")
        let i;
        for (i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }  */
        // for b;
        // for (b = 0; b < subDrops.length; b++) {
        //   let openDropdown = subDrops[b];
        //   if (openDropdown.classList.contains('show')) {
        //     openDropdown.classList.remove('show');
        //   }
        // }
    }
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

blockA.addEventListener('click', function () {
    closeOtherSub();
    blockASub.className = "show";
});

blockB.addEventListener('click', function () {
    closeOtherSub();
    blockBSub.className = "show";
});

blockC.addEventListener('click', function () {
    closeOtherSub();
    blockCSub.className = "show";
});
blockD.addEventListener('click', function () {
    closeOtherSub();
    blockDSub.className = "show";
});
blockE.addEventListener('click', function () {
    closeOtherSub();
    blockESub.className = "show";
});
blockF.addEventListener('click', function () {
    closeOtherSub();
    blockFSub.className = "show";
});
blockG.addEventListener('click', function () {
    closeOtherSub();
    blockGSub.className = "show";
});
other.addEventListener('click', function () {
    closeOtherSub();
    otherSub.className = "show";
});

function closeOtherSub() {
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

let C1 = document.getElementById("C1");
let C2 = document.getElementById("C2");
let C3 = document.getElementById("C3");
let C4 = document.getElementById("C4");
let C5 = document.getElementById("C5");
let C6A = document.getElementById("C6A");
let C6B = document.getElementById("C6B");
let C7 = document.getElementById("C7");
let C8 = document.getElementById("C8");
let C9 = document.getElementById("C9");
let C10A = document.getElementById("C10A");
let C10B = document.getElementById("C10B");
let C11 = document.getElementById("C11");
let C12 = document.getElementById("C12");

let d1 = document.getElementById("D1");
let d2 = document.getElementById("D2");
let d3 = document.getElementById("D3");
let d4 = document.getElementById("D4");
let d5 = document.getElementById("D5");
let d6 = document.getElementById("D6");
let d7 = document.getElementById("D7");
let d8 = document.getElementById("D8");
let d9 = document.getElementById("D9");
let d10 = document.getElementById("D10");
let d11 = document.getElementById("D11");
let d12 = document.getElementById("D12");
let d13 = document.getElementById("D13");
let d14 = document.getElementById("D14");
let d15 = document.getElementById("D15");
let d16 = document.getElementById("D16");
let d17 = document.getElementById("D17");
let d18 = document.getElementById("D18");
let d19 = document.getElementById("D19");
let d20 = document.getElementById("D20");

let e1 = document.getElementById("E1");
let e3 = document.getElementById("E3");

let f1 = document.getElementById("F1");
let f2 = document.getElementById("F2");

let g1 = document.getElementById("G1");
let g2 = document.getElementById("G2");
let g3 = document.getElementById("G3");
let g4 = document.getElementById("G4");
let g5 = document.getElementById("G5");
let g6 = document.getElementById("G6");
let g7 = document.getElementById("G7");
let g8 = document.getElementById("G8");
let g9 = document.getElementById("G9");
let g10 = document.getElementById("G10");
let g11 = document.getElementById("G11");
let g12 = document.getElementById("G12");

let theatre = document.getElementById("otherTheatre");
let blackTop = document.getElementById("otherBlacktop");
let gym = document.getElementById("otherGym");
let mediaCenter = document.getElementById("otherMC");
let bookRoom = document.getElementById("otherBook");

//orginal
var x = 20;
var y = 40;
//1a
var sol = L.latLng([y, x]);
L.marker(sol).addTo(map);
var loca = [];

//set markers
// TODO: insert proper location in between marker([])
a1A.addEventListener('click', function () {
    let marker = L.latLng([612, 445]);
    L.marker(marker).addTo(map);
    loca.push("a1A");
});
a1B.addEventListener('click', function () {
    let marker = L.latLng([635, 445]);
    L.marker(marker).addTo(map);
    loca.push("a1B");
});
a2.addEventListener('click', function () {
    let marker = L.latLng([620, 475]);
    L.marker(marker).addTo(map);
    loca.push("a2");
});
a3.addEventListener('click', function () {
    let marker = L.latLng([612, 513]);
    L.marker(marker).addTo(map);
    loca.push("a3");
});
a3B.addEventListener('click', function () {
    let marker = L.latLng([635, 513]);
    L.marker(marker).addTo(map);
    loca.push("a3B");
});
a4.addEventListener('click', function () {
    let marker = L.latLng([620, 540]);
    L.marker(marker).addTo(map);
    loca.push("a4");
});


b2.addEventListener('click', function () {
    let marker = L.latLng([580, 245]);
    L.marker(marker).addTo(map);
    loca.push("b2");
});
b3.addEventListener('click', function () {
    let marker = L.latLng([560, 245]);
    L.marker(marker).addTo(map);
    loca.push("b3");
});
b4.addEventListener('click', function () {
    let marker = L.latLng([539, 245]);
    L.marker(marker).addTo(map);
    loca.push("b4");
});
b5.addEventListener('click', function () {
    let marker = L.latLng([518, 245]);
    L.marker(marker).addTo(map);
    loca.push("b5");
});
b6A.addEventListener('click', function () {
    let marker = L.latLng([478, 245]);
    L.marker(marker).addTo(map);
    loca.push("b6A");
});
b6B.addEventListener('click', function () {
    let marker = L.latLng([498, 245]);
    L.marker(marker).addTo(map);
    loca.push("b6B");
});
b7.addEventListener('click', function () {
    let marker = L.latLng([485, 265]);
    L.marker(marker).addTo(map);
    loca.push("b7");
});
b8.addEventListener('click', function () {
    let marker = L.latLng([518, 265]);
    L.marker(marker).addTo(map);
    loca.push("b8");
});
b9.addEventListener('click', function () {
    let marker = L.latLng([539, 265]);
    L.marker(marker).addTo(map);
    loca.push("b9");
});
b10.addEventListener('click', function () {
    let marker = L.latLng([560, 265]);
    L.marker(marker).addTo(map);
    loca.push("b10");
});
b11.addEventListener('click', function () {
    let marker = L.latLng([580, 265]);
    L.marker(marker).addTo(map);
    loca.push("b11");
});
b12.addEventListener('click', function () {
    let marker = L.latLng([495, 338]);
    L.marker(marker).addTo(map);
    loca.push("b12");
});
b18.addEventListener('click', function () {
    let marker = L.latLng([570, 365]);
    L.marker(marker).addTo(map);
    loca.push("b18");
});
b20.addEventListener('click', function () {
    let marker = L.latLng([525, 365]);
    L.marker(marker).addTo(map);
    loca.push("b20");
});
b22.addEventListener('click', function () {
    let marker = L.latLng([480, 365]);
    L.marker(marker).addTo(map);
    loca.push("b22");
});
b23.addEventListener('click', function () {
    let marker = L.latLng([480, 385]);
    L.marker(marker).addTo(map);
    loca.push("b23");
});
b26.addEventListener('click', function () {
    let marker = L.latLng([525, 385]);
    L.marker(marker).addTo(map);
    loca.push("b26");
});
b27.addEventListener('click', function () {
    let marker = L.latLng([570, 385]);
    L.marker(marker).addTo(map);
    loca.push("b27");
});

C1.addEventListener('click', function () {
    let marker = L.latLng([558, 460]);
    L.marker(marker).addTo(map);
    loca.push("C1");
});
C2.addEventListener('click', function () {
    let marker = L.latLng([530, 460]);
    L.marker(marker).addTo(map);
    loca.push("C2");
});
C3.addEventListener('click', function () {
    let marker = L.latLng([505, 450]);
    L.marker(marker).addTo(map);
    loca.push("C3");
});
C4.addEventListener('click', function () {
    let marker = L.latLng([505, 471]);
    L.marker(marker).addTo(map);
    loca.push("C4");
});
C5.addEventListener('click', function () {
    let marker = L.latLng([480, 498]);
    L.marker(marker).addTo(map);
    loca.push("C5");
});
C6A.addEventListener('click', function () {
    let marker = L.latLng([470, 454]);
    L.marker(marker).addTo(map);
    loca.push("C6A");
});
C6B.addEventListener('click', function () {
    let marker = L.latLng([462, 476]);
    L.marker(marker).addTo(map);
    loca.push("C6B");
});
C7.addEventListener('click', function () {
    let marker = L.latLng([462, 498]);
    L.marker(marker).addTo(map);
    loca.push("C7");
});
C8.addEventListener('click', function () {
    let marker = L.latLng([462, 520]);
    L.marker(marker).addTo(map);
    loca.push("C8");
});
C9.addEventListener('click', function () {
    let marker = L.latLng([480, 520]);
    L.marker(marker).addTo(map);
    loca.push("C9");
});
C10A.addEventListener('click', function () {
    let marker = L.latLng([560, 498]);
    L.marker(marker).addTo(map);
    loca.push("C10A");
});
C10B.addEventListener('click', function () {
    let marker = L.latLng([540, 498]);
    L.marker(marker).addTo(map);
    loca.push("C10B");
});
C11.addEventListener('click', function () {
    let marker = L.latLng([550, 523]);
    L.marker(marker).addTo(map);
    loca.push("C11");
});
C12.addEventListener('click', function () {
    let marker = L.latLng([550, 546]);
    L.marker(marker).addTo(map);
    loca.push("C12");
});


d1.addEventListener('click', function () {
    let marker = L.latLng([444, 265]);
    L.marker(marker).addTo(map);
    loca.push("d1");
});
d2.addEventListener('click', function () {
    let marker = L.latLng([424, 265]);
    L.marker(marker).addTo(map);
    loca.push("d2");
});
d3.addEventListener('click', function () {
    let marker = L.latLng([403, 265]);
    L.marker(marker).addTo(map);
    loca.push("d3");
});
d4.addEventListener('click', function () {
    let marker = L.latLng([382, 265]);
    L.marker(marker).addTo(map);
    loca.push("d4");
});
d5.addEventListener('click', function () {
    let marker = L.latLng([382, 285]);
    L.marker(marker).addTo(map);
    loca.push("d5");
});
d6.addEventListener('click', function () {
    let marker = L.latLng([403, 285]);
    L.marker(marker).addTo(map);
    loca.push("d6");
});
d7.addEventListener('click', function () {
    let marker = L.latLng([424, 285]);
    L.marker(marker).addTo(map);
    loca.push("d7");
});
d8.addEventListener('click', function () {
    let marker = L.latLng([444, 285]);
    L.marker(marker).addTo(map);
    loca.push("d8");
});
d9.addEventListener('click', function () {
    let marker = L.latLng([392, 305]);
    L.marker(marker).addTo(map);
    loca.push("d9");
});
d10.addEventListener('click', function () {
    let marker = L.latLng([374, 305]);
    L.marker(marker).addTo(map);
    loca.push("d10");
});
d11.addEventListener('click', function () {
    let marker = L.latLng([374, 324]);
    L.marker(marker).addTo(map);
    loca.push("d11");
});
d12.addEventListener('click', function () {
    let marker = L.latLng([392, 324]);
    L.marker(marker).addTo(map);
    loca.push("d12");
});
d13.addEventListener('click', function () {
    let marker = L.latLng([444, 344]);
    L.marker(marker).addTo(map);
    loca.push("d13");
});
d14.addEventListener('click', function () {
    let marker = L.latLng([423, 344]);
    L.marker(marker).addTo(map);
    loca.push("d14");
});
d15.addEventListener('click', function () {
    let marker = L.latLng([402, 344]);
    L.marker(marker).addTo(map);
    loca.push("d15");
});
d16.addEventListener('click', function () {
    let marker = L.latLng([381, 344]);
    L.marker(marker).addTo(map);
    loca.push("d16");
});
d17.addEventListener('click', function () {
    let marker = L.latLng([381, 364]);
    L.marker(marker).addTo(map);
    loca.push("d17");
});
d18.addEventListener('click', function () {
    let marker = L.latLng([402, 364]);
    L.marker(marker).addTo(map);
    loca.push("d18");
});
d19.addEventListener('click', function () {
    let marker = L.latLng([423, 364]);
    L.marker(marker).addTo(map);
    loca.push("d19");
});
d20.addEventListener('click', function () {
    let marker = L.latLng([444, 364]);
    L.marker(marker).addTo(map);
    loca.push("d20");
});


e1.addEventListener('click', function () {
    let marker = L.latLng([411, 453]);
    L.marker(marker).addTo(map);
    loca.push("e1");
});
e3.addEventListener('click', function () {
    let marker = L.latLng([372, 453]);
    L.marker(marker).addTo(map);
    loca.push("e3");
});


f1.addEventListener('click', function () {
    let marker = L.latLng([403, 540]);
    L.marker(marker).addTo(map);
    loca.push("f1");
});
f2.addEventListener('click', function () {
    let marker = L.latLng([373, 540]);
    L.marker(marker).addTo(map);
    loca.push("f2");
});


g1.addEventListener('click', function () {
    let marker = L.latLng([351, 305]);
    L.marker(marker).addTo(map);
    loca.push("g1");
});
g2.addEventListener('click', function () {
    let marker = L.latLng([331, 305]);
    L.marker(marker).addTo(map);
    loca.push("g2");
});
g3.addEventListener('click', function () {
    let marker = L.latLng([331, 324]);
    L.marker(marker).addTo(map);
    loca.push("g3");
});
g4.addEventListener('click', function () {
    let marker = L.latLng([351, 324]);
    L.marker(marker).addTo(map);
    loca.push("g4");
});
g5.addEventListener('click', function () {
    let marker = L.latLng([346, 346]);
    L.marker(marker).addTo(map);
    loca.push("g5");
});
g6.addEventListener('click', function () {
    let marker = L.latLng([326, 346]);
    L.marker(marker).addTo(map);
    loca.push("g6");
});
g7.addEventListener('click', function () {
    let marker = L.latLng([305, 346]);
    L.marker(marker).addTo(map);
    loca.push("g7");
});
g8.addEventListener('click', function () {
    let marker = L.latLng([285, 346]);
    L.marker(marker).addTo(map);
    loca.push("g8");
});
g9.addEventListener('click', function () {
    let marker = L.latLng([285, 366]);
    L.marker(marker).addTo(map);
    loca.push("g9");
});
g10.addEventListener('click', function () {
    let marker = L.latLng([305, 366]);
    L.marker(marker).addTo(map);
    loca.push("g10");
});
g11.addEventListener('click', function () {
    let marker = L.latLng([326, 366]);
    L.marker(marker).addTo(map);
    loca.push("g11");
});
g12.addEventListener('click', function () {
    let marker = L.latLng([346, 366]);
    L.marker(marker).addTo(map);
    loca.push("g12");
});


theatre.addEventListener('click', function () {
    let marker = L.latLng([391, 464]);
    L.marker(marker).addTo(map);
    loca.push("theatre");
});
blackTop.addEventListener('click', function () {
    let marker = L.latLng([371, 685]);
    L.marker(marker).addTo(map);
    loca.push("blackTop");
});
gym.addEventListener('click', function () {
    let marker = L.latLng([200, 634]);
    L.marker(marker).addTo(map);
    loca.push("gym");
});
mediaCenter.addEventListener('click', function () {
    let marker = L.latLng([485, 300]);
    L.marker(marker).addTo(map);
    loca.push("meidaCenter");
});
bookRoom.addEventListener('click', function () {
    let marker = L.latLng([475, 335]);
    L.marker(marker).addTo(map);
    loca.push("bookRoom");
});
