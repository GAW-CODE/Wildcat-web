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
FIREBASE_DATABASE.ref('/directory/academics/' + currentDepartment).orderByChild("Name").equalTo(name).once('value')
  .then((snapshot) => {
    console.log(snapshot.val());
    //READ data from Database
    //display it with DOM

    let div = document.createElement('div');
    let information = document.createTextNode(snapshot.val().Name);
    div.appendChild(information);
    document.getElementById("roomNum").appendChild(div.firstChild);
    //you don't necessarily have to append a new element in your case, Jeffrey
    //you should just change the text of pre-existing elements
  });
