//recognize WHO user clicks on - get the name of the person whose contact card user clicked
let name;

//https://stackoverflow.com/questions/17502071/transfer-data-from-one-html-file-to-another
window.onload = function() {
    let url = document.location.href;
		let params = url.split('?')[1].split('&')[0];
		name = decodeURIComponent(params.substring(params.indexOf('=') + 1));
}

//perform a search query IN THE DATABASE under the '/directory' folder

//find the key of the desired person
//READ data from Database - using key
//display it with DOM
const FIREBASE_DATABASE = firebase.database();//access the database

FIREBASE_DATABASE.ref('/directory/academics/math').once('value')
	.then( (snapshot) => {
			console.log(snapshot.val());
      console.log(name);
				//code that handles the snapshot
				//snapshot.val() is the actual, usable data (parsed into JSON)
			let div = document.createElement('div');
			let domString = ``; //use template literals here
			div.innerHTML = domString;
			//selectedElement.appendChild(div.firstChild);
	});
