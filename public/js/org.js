//Database - displaying announcement request status
const FIREBASE_AUTH = firebase.auth();
const FIREBASE_DATABASE = firebase.database();

function displayRequestStatus() {
  let userId = FIREBASE_AUTH.currentUser.uid;
  let organizationName;
  let clubRejections;
  FIREBASE_DATABASE.ref('/users/' + userId).once('value').then(function(snapshot) {
    organizationName = snapshot.val().organization;
    console.log(organizationName);
  });

// <!--Using rejectionsGame since app js is not working properly -->
  FIREBASE_DATABASE.ref('/requests/rejectionsGame/').on('value', gotData, errData);

  function gotData(data){
    //console.log(data.val());
    let rejection = data.val();
    let keys = Object.keys(rejection);
    for (let i = 0; i < keys.length; i++){
      let k = keys[i];
      let rejectionReason = rejection[k].rejectionReason;
      let message = rejection[k].message;
      if(rejectionReason == null) {
        console.log("Reason not displaying");
      }
      console.log(rejectionReason);
      console.log(message);
    }
    //console.log(keys);
  }
  function errData(err) {
    console.log('Error!');
    console.log(err);
  }


  //TODO: Kyle: insert your pseudocode here
}

//logout
let logOutBtn = document.getElementById('logout');

logOutBtn.addEventListener('click', signOut);
//know if user is logged in or naw
FIREBASE_AUTH.onAuthStateChanged(handleAuthStateChanged);

function signOut() {
  FIREBASE_AUTH.signOut();
  window.location.href = "index.html";
  console.log('Signed out');
}

function handleAuthStateChanged(user) {
  if (user) { //&& user is an Organization
    console.log(user);
    displayRequestStatus();
  } else { //prevent unauthorized users from accessing admin.html
    setTimeout(function() {window.location.href = "login.html";}, 2000);
  }
}


/**
 * This is the DOM behind organization.html (below code)
*/

//sidebar selections
//sidebar & button selections

let status = document.getElementsByClassName('modItem')[0];
let request = document.getElementsByClassName('modItem')[1];
let info = document.getElementsByClassName('modItem')[2];
let edit = document.getElementById('editOrg');
let cancel = document.getElementById('cancel');

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
