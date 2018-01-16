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
    mod0.className = "module"
    mod1.className = "off";
    mod2.className = "off";
    mod3.className = "off";
}

//Announcements Logic

const FIREBASE_AUTH = firebase.auth();
const FIREBASE_DATABASE = firebase.database();

const logOutBtn = document.getElementById('logout');
const requestList = document.getElementById('reqList');

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
  let domString = `<div class="req"><div class="reqMeta"><h3 style="padding: 2%;">${announcement.title}</h3><div style="padding: 2%;"><img src="appAssets/approve.png" title="Approve" class="reqYes reqDecision hov"><img src="appAssets/reject.png" title="Reject" class="reqNo reqDecision hov"></div></div><div class="descHide"><p style="padding: 2%;">${announcement.message}</p></div></div>`;
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

//approve / deny
function approve(event) {
  // index of the container = which child to get from database
  let reqArray = Array.prototype.slice.call(document.getElementsByClassName('req'));
  let selectedAnnouncement = event.target.parentNode.parentNode.parentNode
  let index = reqArray.indexOf(selectedAnnouncement);

  // retrieve announcement corresponding to the one you clicked on
  let announcement;
  let keyList = [];

  FIREBASE_DATABASE.ref('/requests/announcements').once('value')
    .then((snapshot) => {
      let val = snapshot.val();
      for (let key in val) {
        keyList.push(key);
      }
      FIREBASE_DATABASE.ref('/requests/announcements/' + keyList[index]).once('value')
        .then((snapshot) => {
          announcement = snapshot.val();
        });
    })
    .then(() => {
      // insert announcement under “/announcements” in database
      FIREBASE_DATABASE.ref('/announcements').push(announcement);
      // remove announcement from ‘/requests/announcements’ in database
      FIREBASE_DATABASE.ref('/requests/announcements').child(keyList[index]).remove()
    })
    .then(() => {
      // remove from admin.html
      selectedAnnouncement.parentNode.removeChild(selectedAnnouncement);
    });

  // send the message to everyone
  // display on announce.html (pull from “/announcements”
  // Categorize the message (put it in the correct category)

}

function deny(event) {
  let reason = prompt('Explain why the announcement was rejected');

  //send reason back to organization's interface
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
