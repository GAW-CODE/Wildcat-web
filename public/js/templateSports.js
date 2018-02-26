let name;
let currentDepartment;
let key;

let url = document.location.href;
let params = url.split('?')[1].split('&')[0];
name = decodeURIComponent(params.substring(params.indexOf('=') + 1));
currentDepartment = name.split(' .')[1];
name = name.split(' .')[0];

const FIREBASE_DATABASE = firebase.database();

FIREBASE_DATABASE.ref('/directory/sports/' + currentDepartment).orderByChild("Name").equalTo(name).on('value', function(snapshot) {
    let key;
    snapshot.forEach(function(data) {
        key = data.key;
    });
    let info = snapshot.val()[key];
    console.log(info);

    //pic.setAttribute("src", info.Pic); //i didnt put a pic property in the database
    document.getElementById("name").textContent = info.Name;
    document.getElementById("coach").textContent = info.Coach;
    document.getElementById("email").textContent = info.Email;
    document.getElementById("phone").textContent = info.PhoneNumber;
    document.getElementById("dates").textContent = info.Dates;
    document.getElementById("captain1").textContent = info.Captains;
    document.getElementById("captain2").textContent = info.Captains;
    document.getElementById("other").textContent = info.Other;




    //you don't necessarily have to append a new element in your case, Jeffrey
    //you should just change the text of pre-existing elements
  });
