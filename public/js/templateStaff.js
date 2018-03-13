let name;
let currentDepartment;
let key;

let url = document.location.href;
let params = url.split('?')[1].split('&')[0];
name = decodeURIComponent(params.substring(params.indexOf('=') + 1));
currentDepartment = name.split(' .')[1];
name = name.split(' .')[0];

const FIREBASE_DATABASE = firebase.database(); //access the database

FIREBASE_DATABASE.ref('/directory/academics/' + currentDepartment).orderByChild("Name").equalTo(name).on('value', function(snapshot) {
    let key;
    snapshot.forEach(function(data) { //assumptiin: only one teacher with a certain name exists at Wilson
        key = data.key;
    });
    let info = snapshot.val()[key];
    console.log(info);

    //pic.setAttribute("src", info.Pic);
    document.getElementById("name").textContent = info.Name;
    document.getElementById("roomNum").textContent = info.RoomNumber;
    document.getElementById("email").textContent = info.Email;
    document.getElementById("classList").textContent = info.Classes;
    document.getElementById("officeHours").textContent = info.OfficeHours;
    document.getElementById("askMeAbout").textContent = info.AskMeAbout;
});
