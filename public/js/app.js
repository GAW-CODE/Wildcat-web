/**
 * Logic for admin.html
*/

//Sidebar Logic
let modButtons = document.getElementsByClassName("navModule");
let modules = document.getElementsByClassName("off");
let announce = modules[0];
let staff = modules[1];
let calendar = modules [2];
let map = modules[3];

//changes the modules per sidebar
modManage(announce, staff, calendar, map);
for(var i = 0; i < modButtons.length; i++){
    modButtons[i].addEventListener('click', function(e){
        //console.log(e);
        var selection = e.srcElement.innerHTML;

        if(selection == modButtons[0].innerHTML){
            modManage(announce, staff, calendar, map);
            console.log("0 match");
        }
        else if(selection == modButtons[1].innerHTML){
            modManage(staff, announce, calendar, map);
            console.log("1 match");
        }
        else if(selection == modButtons[2].innerHTML){
            modManage(calendar, staff, announce, map);
            console.log("2 match");
        }
        else{
            modManage(map, staff, calendar, announce);
            console.log("else");
        }
    });
}

//shows one module, hides the other three
function modManage(mod0, mod1, mod2, mod3){
    mod0.className = "module";
    mod1.className = "off";
    mod2.className = "off";
    mod3.className = "off";
}

//Announcements Logic

const FIREBASE_AUTH = firebase.auth();
const FIREBASE_DATABASE = firebase.database();

let logOutBtn = document.getElementById('logout');
let requestList = document.getElementById('reqList');

logOutBtn.addEventListener('click', signOut);
//know if user is logged in or naw
FIREBASE_AUTH.onAuthStateChanged(handleAuthStateChanged);

function signOut() {
  FIREBASE_AUTH.signOut();
  window.location.href = "index.html";
  console.log('Signed out');
}

function handleAuthStateChanged(user) {
  if (user) { //&& user is an Admin
    console.log(user);
  } else { //prevent unauthorized users from accessing admin.html
    setTimeout(function() {window.location.href = "404.html";}, 2000);
  }
}

function displayRequestAnnouncement(announcement) {
  let div = document.createElement('div');
  //eventually - display organization's profile pic to the LEFT of the announcement title
  let domString = `<div class="req">
      <div class="reqMeta">
        <h3 style="padding: 2%;">${announcement.title}</h3>
        <div style="padding: 2%;"><img src="appAssets/approve.png"
        title="Approve"
        class="reqYes reqDecision hov"><img src="appAssets/reject.png"
        title="Reject"
        class="reqNo reqDecision hov">
        </div>
        </div>
        <div class="descHide">
        <p style="padding: 2%;">${announcement.message}</p>

      </div>

    </div>`;
  div.innerHTML = domString;
  requestList.appendChild(div.firstChild);
}
function displayEventAnnouncement(event) {
  let div = document.createElement('div');
  //eventually - display organization's profile pic to the LEFT of the announcement title
  let domString = `<div class="req"><div class="reqMeta"><h3 style="padding: 2%;">${event.name}</h3><div style="padding: 2%;"><img src="appAssets/approve.png" title="Approve" class="reqYes reqDecision hov"><img src="appAssets/reject.png" title="Reject" class="reqNo reqDecision hov"></div></div><div class="descHide"><p style="padding: 2%;">Organization: ${event.org}</p><p style="padding: 2%;">Description: ${event.description}</p><p style="padding: 2%;">Location: ${event.location}</p><p style="padding: 2%;">From: ${event.StartTime}</p><p style="padding: 2%;">To: ${event.EndTime}</p><p style="padding: 2%;">Date: ${event.date}</p></div></div>`;
  div.innerHTML = domString;
  requestList.appendChild(div.firstChild);
}
//Making the request descrptions expand and condense
function makeAnnouncementHideable(event) {
    if (event.path[2].children[1].className == "descHide"){
        event.path[2].children[1].className = "descShow";
    } else {
        event.path[2].children[1].className = "descHide";
    }
}

function approve(event) {
  // index of the container = which child to get from database
  let reqArray = Array.prototype.slice.call(document.getElementsByClassName('req'));
  let selectedAnnouncement = event.target.parentNode.parentNode.parentNode
  let index = reqArray.indexOf(selectedAnnouncement);

  // retrieve announcement corresponding to the one you clicked on
  let announcement;
  let keyList = [];
  let orgName;

  FIREBASE_DATABASE.ref('/requests/announcements').once('value')
    .then((snapshot) => {
      let val = snapshot.val();
      for (let key in val) {
        keyList.push(key);
      }
      FIREBASE_DATABASE.ref('/requests/announcements/' + keyList[index]).once('value')
        .then((snapshot) => {
          announcement = snapshot.val();
          orgName = announcement.org;
          console.log(announcement);
        });
    })
    .then(() => {
      // insert announcement under “/announcements” in database
      FIREBASE_DATABASE.ref('/announcements/' + orgName).push(announcement);
      // remove announcement from ‘/requests/announcements’ in database
      FIREBASE_DATABASE.ref('/requests/announcements').child(keyList[index]).remove()
    })
    .then(() => {
      // remove from admin.html
      selectedAnnouncement.parentNode.removeChild(selectedAnnouncement);
    });
}
function approveEvent(event) {
  // index of the container = which child to get from database
  let reqArray = Array.prototype.slice.call(document.getElementsByClassName('req'));
  let selectedAnnouncement = event.target.parentNode.parentNode.parentNode;
  let index = reqArray.indexOf(selectedAnnouncement);

  // retrieve announcement corresponding to the one you clicked on
  let announcement;
  let keyList = [];
  let orgName;

  FIREBASE_DATABASE.ref('/requests/events').once('value')
    .then((snapshot) => {
      let val = snapshot.val();
      for (let key in val) {
        keyList.push(key);
      }
      FIREBASE_DATABASE.ref('/requests/events/' + keyList[index]).once('value')
        .then((snapshot) => {
          announcement = snapshot.val();
          orgName = announcement.org;
        });
    })
    .then(() => {
      let endTime = FIREBASE_DATABASE.ref('/requests/events/' + keyList[index] + '/EndTime');
      let startTime = FIREBASE_DATABASE.ref('/requests/events/' + keyList[index] + '/StartTime');
      let date = FIREBASE_DATABASE.ref('/requests/events/' + keyList[index] + '/date');
      let description =  FIREBASE_DATABASE.ref('/requests/events/' + keyList[index] + '/description');
      let location = FIREBASE_DATABASE.ref('/requests/events/' + keyList[index] + '/location');
      let name =  FIREBASE_DATABASE.ref('/requests/events/' + keyList[index] + '/name');
      let org =  FIREBASE_DATABASE.ref('/requests/events/' + keyList[index] + '/org');

      calendar.get('/calendar.js', function(req, res){
        res.addEvent(endTime, startTime, date, description, location, name, org);
      });
      // insert announcement under “/events in database
      FIREBASE_DATABASE.ref('/events/' + orgName).push(announcement);
      // remove announcement from ‘/requests/events in database
      FIREBASE_DATABASE.ref('/requests/events').child(keyList[index]).remove()
    })
    .then(() => {
      // remove from admin.html
      selectedAnnouncement.parentNode.removeChild(selectedAnnouncement);
    });
}
function deny(event) {
  let reason = prompt('Explain why the announcement was rejected'); //TODO: change prompt() popup to actual user interface
  // index of the container = which child to get from database
  let reqArray = Array.prototype.slice.call(document.getElementsByClassName('req'));
  let selectedAnnouncement = event.target.parentNode.parentNode.parentNode;
  let index = reqArray.indexOf(selectedAnnouncement);

  // retrieve announcement corresponding to the one you clicked on
  let announcement;
  let keyList = [];
  let orgName;

  FIREBASE_DATABASE.ref('/requests/announcements').once('value')
    .then((snapshot) => {
      let val = snapshot.val();
      for (let key in val) {
        keyList.push(key);
      }
      FIREBASE_DATABASE.ref('/requests/announcements/' + keyList[index]).once('value')
        .then((snapshot) => {
          announcement = snapshot.val();
          announcement.rejectionReason = reason; //rejection stored as a subnode/property of the announcement object
          orgName = announcement.org;
          console.log(announcement);
        });
    })
    .then(() => {
      // insert announcement under “/requests/rejections” in database
      FIREBASE_DATABASE.ref('/requests/rejections/' + orgName).push(announcement);

      // remove announcement from ‘/requests/announcements’ in database
      FIREBASE_DATABASE.ref('/requests/announcements').child(keyList[index]).remove()
    })
    .then(() => {
      // remove from admin.html
      selectedAnnouncement.parentNode.removeChild(selectedAnnouncement);
    });
}

//retrieve announcement requests from FIREBASE_DATABASE
//note: do not use once() b/c that only retrieves data once or on('value') b/c that retrieves already displayed data
FIREBASE_DATABASE.ref('/requests/announcements').on('child_added', function(snapshot, prevChildKey) {
  var val = snapshot.val();
  displayRequestAnnouncement(val);

  let req = document.getElementsByClassName('req');
  let approveBtns = document.getElementsByClassName('reqYes');
  let denyBtns = document.getElementsByClassName('reqNo');
  for (let i = 0; i < req.length; i++) {
      req[i].addEventListener("click" , makeAnnouncementHideable);
      approveBtns[i].addEventListener("click" , approve);
      denyBtns[i].addEventListener("click" , deny);
  }
});
FIREBASE_DATABASE.ref('/requests/events').on('child_added', function(snapshot, prevChildKey) {
  var val = snapshot.val();
  displayEventAnnouncement(val);

  let req = document.getElementsByClassName('req');
  let approveBtns = document.getElementsByClassName('reqYes');
  let denyBtns = document.getElementsByClassName('reqNo');
  for (let i = 0; i < req.length; i++) {
      req[i].addEventListener("click" , makeAnnouncementHideable);
      approveBtns[i].addEventListener("click" , approveEvent);
      denyBtns[i].addEventListener("click" , denyEvent);
  }
});

function denyEvent(e) { //e is an object representing the click event (you can trace which element was clicked on)

}
