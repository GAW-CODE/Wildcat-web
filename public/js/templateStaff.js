//take mr changs info from snapshot
//look for the key
//display it with DOM
const FIREBASE_DATABASE = firebase.database();//access the database

FIREBASE_DATABASE.ref('/directory/academics/math').once('value')
.then( (snapshot) => {
		console.log(snapshot.val());
			//code that handles the snapshot
			//snapshot.val() is the actual, usable data (parsed into JSON)
		let div = document.createElement('div');
		let domString = ``;
		div.innerHTML = domString;
		selectedElement.appendChild(div.firstChild);
});

