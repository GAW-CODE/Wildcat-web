let name;
let currentDepartment;
let key;

let url = document.location.href;
let params = url.split('?')[1].split('&')[0];
name = decodeURIComponent(params.substring(params.indexOf('=') + 1));

const FIREBASE_DATABASE = firebase.database();

FIREBASE_DATABASE.ref('/directory/groups').orderByChild("Name").equalTo(name).on('value', function(snapshot) {
    let key;
    snapshot.forEach(function(data) {
        key = data.key;
    });
    let info = snapshot.val()[key];
    console.log(info);

    document.getElementById("name").textContent = info.Name;
    document.getElementById("coach").textContent = info.COach;
    document.getElementById("dates").textContent = info.Dates;
    document.getElementById("description").textContent = info.Description;
    document.getElementById("meetingInfo").textContent = info.MeetingInfo;
    document.getElementById("other").textContent = info.Other;
    document.getElementById("captain1").textContent = info.Presidents;
    document.getElementById("captain2").textContent = info.Presidents;
    document.getElementById("socialMedia").textContent = info.SocialMedia;

  });
