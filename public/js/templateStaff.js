//recognize WHO user clicks on - get the name of the person whose contact card user clicked
let name;
let currentDepartment;
let key;
//https://stackoverflow.com/questions/17502071/transfer-data-from-one-html-file-to-another

let url = document.location.href;
let params = url.split('?')[1].split('&')[0];
name = decodeURIComponent(params.substring(params.indexOf('=') + 1));
currentDepartment = name.split(' .')[1];
name = name.split(' .')[0];

//perform a search query IN THE DATABASE under the '/directory' folder
const FIREBASE_DATABASE = firebase.database(); //access the database

//make sure currentDepartment value is obtained first
//snapshot contains the ENTIRE data of the matching person (key not needed)
FIREBASE_DATABASE.ref('/directory/academics/' + currentDepartment).orderByChild("Name").equalTo(name).on('value', function(snapshot) {
    //READ data from Database
    //display data with DOM
    let key;
    snapshot.forEach(function(data) { //assumptiin: only one teacher with a certain name exists at Wilson
        key = data.key;
    });
    let info = snapshot.val()[key];
    console.log(info);

    let name = document.createElement('div');
    let nameInfo = document.createTextNode(snapshot.val().Name);
    name.appendChild(nameInfo);
    document.getElementById("name").appendChild(name.firstChild);

    let roomNumber = document.createElement('div');
    let roomInfo = document.createTextNode(snapshot.val().RoomNumber);
    roomNumber.appendChild(roomInfo);
    document.getElementById("roomNum").appendChild(roomNumber.firstChild);

    let Email = document.createElement('div');
    let mailInfo = document.createTextNode(snapshot.val().Email);
    Email.appendChild(mailInfo);
    document.getElementById("email").appendChild(Email.firstChild);

    let classes = document.createElement('div');
    let classInfo = document.createTextNode(snapshot.val().Classes);
    classes.appendChild(classInfo);
    document.getElementById("classList").appendChild(classes.firstChild);

    let officeHours = document.createElement('div');
    let officeHoursInfo = document.createTextNode(snapshot.val().officeHours);
    officeHours.appendChild(officeHoursInfo);
    document.getElementById("officeHours").appendChild(officeHours.firstChild);


    let askMeAbout = document.createElement('div');
    let askMeAboutInfo = document.createTextNode(snapshot.val().askMeAbout);
    askMeAbout.appendChild(askMeAboutInfo);
    document.getElementById("askMeAbout").appendChild(askMeAbout.firstChild);


    //you don't necessarily have to append a new element in your case, Jeffrey
    //you should just change the text of pre-existing elements
  });
