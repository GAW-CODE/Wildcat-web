//Database - displaying announcement request status
const FIREBASE_AUTH = firebase.auth();
const FIREBASE_DATABASE = firebase.database();

// create method to compare the current time to the time on firebase
//return a string that will be displayed (time stamp)

let x;

function displayRequestStatus() {
  let userId = FIREBASE_AUTH.currentUser.uid;
  let organizationName;
  let clubRejections;
  let rejectionsRef;
  let requestRef;
  let approvedRef;
  let keyList = []; // stores the keys of announcements that contain the organization
  let val;
  let index;
  let messages=[];
  let time=[];

  FIREBASE_DATABASE.ref('/users/' + userId).once('value').then(function(snapshot) {
    organizationName = snapshot.val().organization;
  })
   // pull all rejections
  .then(() => {
    rejectionsRef = FIREBASE_DATABASE.ref('/requests/rejections/' + organizationName);
    rejectionsRef.on('value', gotData, errData);
  })
  // pull all requests received by the database (yet to be approved)
  .then(() => {
    requestRef = FIREBASE_DATABASE.ref('/requests/announcements/');
    requestRef.orderByChild('org').equalTo(`${organizationName}`).once('value')
      .then((snapshot) => {
        let matches = snapshot.val();
        for (let key in matches) {
          let announcement = matches[key];
          messages.push(announcement.message); //pushes the message to messages array
          time.push(announcement.currentTime); //pushes the time to time array
          //in display method, display the message and timeofAction of the same index
        }
      })
      //METHOD FOR SENT REQUEST
      .then(()=>{
        let timestamp;
        let message;
        for(let i=0;i<messages.length;i++){
          let keyword="Sent ";
          timeStamp=timeDifference(time[i],keyword);
          displaySentAnnouncement(messages[i],timeStamp);
        }
        console.log(messages); //testing messages array
        console.log(time); //testing time array
      })

  })


  // .then method ends here
  .then(() => {
    approvedRef = FIREBASE_DATABASE.ref('/announcements/' + organizationName);
    approvedRef.once('value')
      .then((snapshot) => {
        approvedRec(snapshot);
      }).catch(errData);
  })
}

//Function for Approved Requests
function approvedRec(data){
  let timeStamp;
  let request = data.val();
  let keys = Object.keys(request);

  for(let i=0;i<keys.length;i++){
    let k=keys[i];
    let message=request[k].message;
    let timeofAction=request[k].currentTime;
    console.log(timeofAction);
    console.log(message);
    let keyword="Announcement Approved ";
    timeStamp=timeDifference(timeofAction,keyword);
    //setting timeStamp variable equal to return of time difference method
    console.log(timeStamp);
    displayApprovedAnnouncement(message,timeStamp);
  }

}



  // Function for Rejections
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
      let keyword="Rejected ";
      timeStamp=timeDifference(timeofAction,keyword);
      //setting timeStamp variable equal to return of time difference method
      console.log(timeStamp);
      displayRejectionAnnouncement(message,rejectionReason,timeStamp);
    }

    //console.log(keys);
  }
  //catch method for errors
  function errData(err){
    console.log('Error!');
    console.log(err);
  }

  // Get the time difference for each message
  function timeDifference(timeofAction,keyword){
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
        return keyword+days+" days ago";
      }
      else{
        return keyword+days+" day ago";
      }
    }
    else if (hours!=0) {
      if(hours>1){
      return keyword+hours+" hours ago";
      }
      else{
      return keyword+hours+" hour ago";
      }
    }
    else if (minutes!=0) {
      if(minutes>1){
      return keyword+minutes+" minutes ago";
      }
      else{
      return keyword+minutes+" minute ago";
      }
    }
    else{
      return keyword+ "just now";
    }

  }

// DISPLAY METHODS

//Display for Rejections
function displayRejectionAnnouncement(message,rejectionReason,timeStamp){

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

//Display for Requests sent to Admin
function displayRequestAnnouncement(message,timeStamp){
 let requestList=document.getElementById('requests');
 let div = document.createElement('div');
   let template=
  `
   <div>
   <h>Original Request</h>
     <p>${message}</p>
  </div>
   <div>
     <p>${timeStamp}</p>
  </div>
   `;
   div.innerHTML=template;
  requestList.appendChild(div);
}
//Display for Approved Announcements
function displayApprovedAnnouncement(message,timeStamp){
 let approvedList=document.getElementById('approvedRequests');
 let div = document.createElement('div');
   let template=
  `
   <div>
   <h>Original Request</h>
     <p>${message}</p>
  </div>
   <div>
     <p>${timeStamp}</p>
  </div>
   `;
   div.innerHTML=template;
  approvedList.appendChild(div);
}
//Display for Sent Announcements
function displaySentAnnouncement(message,timeStamp){
 let sentList=document.getElementById('requests');
 let div = document.createElement('div');
   let template=
  `
   <div>
   <h>Original Request</h>
     <p>${message}</p>
  </div>
   <div>
     <p>${timeStamp}</p>
  </div>
   `;
   div.innerHTML=template;
  sentList.appendChild(div);
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
