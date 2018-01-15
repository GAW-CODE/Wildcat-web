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

  //Making the request descrptions expand and condense
  let req = document.getElementsByClassName('req');

  for (let i = 0; i < req.length; i++) {
      //req[i].addEventListener("click" , description(req[i]));
      req[i].addEventListener("click" , function(e){
          console.log(e.path);
          //console.log(e.path[2].childNodes[3].className);
          //for (let j = 0; j < )
          if (e.path[2].children[1].className == "descHide"){
              e.path[2].children[1].className = "descShow";
          } else {
              e.path[2].children[1].className = "descHide";
          }
      }, true);
  }
}


//retrieve announcements from FIREBASE_DATABASE
FIREBASE_DATABASE.ref('/requests/announcements').once('value')
    .then((snapshot) => {
      var val = snapshot.val();
      for (var key in val) {
        if (val.hasOwnProperty(key)) {
          console.log(val[key]);
          displayRequestAnnouncement(val[key]);
        }
      }
    });


//approve / deny -> remove from database
