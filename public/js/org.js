//Database - displaying announcement request status
const FIREBASE_AUTH = firebase.auth();
const FIREBASE_DATABASE = firebase.database();

// create method to compare the current time to the time on firebase
//return a string that will be displayed (time stamp)

function displayRequestStatus() {
  let userId = FIREBASE_AUTH.currentUser.uid;
  let organizationName;
  let clubRejections;
  let rejectionsRef;
  FIREBASE_DATABASE.ref('/users/' + userId).once('value').then(function(snapshot) {
    organizationName =snapshot.val().organization;
    console.log(organizationName);
  })
   // pull all rejections
  .then(() =>{
    rejectionsRef=FIREBASE_DATABASE.ref('/requests/rejections/'+organizationName);
    rejectionsRef.on('value', gotData, errData);
  });
}


  function gotData(data){
    //console.log(data.val());
    let timeStamp;
    let rejection=data.val();
    let keys=Object.keys(rejection);
    for(let i=0;i<keys.length;i++){
      let k=keys[i];
      let rejectionReason=rejection[k].rejectionReason;
      let message=rejection[k].message;
      let timeofAction=rejection[k].currentTime;
      console.log(timeofAction);
      console.log(rejectionReason);
      console.log(message);
      timeStamp=timeDifference(timeofAction);
      //setting timeStamp variable equal to return of time difference method
      console.log(timeStamp);
      displayRequestAnnouncement(message,rejectionReason,timeStamp);
    }
    //console.log(keys);
  }
  function errData(err){
    console.log('Error!');
    console.log(err);
  }

  function timeDifference(timeofAction){
    let now; //now is the current time
    let millSecDiff; //difference between the 2 milliseconds
    let dateDiff;
    let days;
    let hours;
    let minutes;
    let seconds;

    now=new Date().getTime();
    millSecDiff=now-timeofAction;
    days = Math.floor(millSecDiff / 1000 / 60 / (60 * 24)); //days difference
    hours = Math.floor(millSecDiff / 3600000);
    minutes = Math.floor((millSecDiff - (hours * 3600000)) / 60000);
    seconds = Math.floor((millSecDiff - (hours * 3600000) - (minutes * 60000)) / 1000);
    console.log(hours);

    if(days!=0){
      if(days>1){
        return "Rejected "+days+" days ago";
      }
      else{
        return "Rejected "+days+" day ago";
      }
    }
    else if (hours!=0) {
      if(hours>1){
      return "Rejected "+hours+" hours ago";
      }
      else{
      return "Rejected "+hours+" hour ago";
      }
    }
    else if (minutes!=0) {
      if(minutes>1){
      return "Rejected "+minutes+" minutes ago";
      }
      else{
      return "Rejected "+minutes+" minute ago";
      }
    }
    else{
      return "Rejected just now";
    }

  }

function displayRequestAnnouncement(message,rejectionReason,timeStamp){
 let rejectionList=document.getElementById('rejection');
 let div = document.createElement('div');
   let template=
  `
   <div>
   <h>Original Request</h>
     <p>${message}</p>
  </div>
  <div class="descHide">
   <h>Rejection Reason</h>
     <p>${rejectionReason}</p>
   </div>
   <div>
     <p>${timeStamp}</p>
  </div>
   `;
   div.innerHTML=template;
   rejectionList.appendChild(div);
}




 //let div = document.createElement("div");
 //let header=document.createElement("Header")
 //let currMessage=document.createTextNode("Message: "+message+"\n");
 //let currReason=document.createTextNode("Rejection Reason: "+rejectionReason);
 //div.appendChild(currMessage);
 //div.appendChild(currReason);
 //document.getElementById("rejection").appendChild(div);

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
    setTimeout(function() {window.location.href = "404.html";}, 2000);
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
