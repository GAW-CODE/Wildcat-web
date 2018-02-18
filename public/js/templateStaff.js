//recognize WHO user clicks on - get the name of the person whose contact card user clicked
let name;
let currentDepartment;
let key;
//https://stackoverflow.com/questions/17502071/transfer-data-from-one-html-file-to-another
window.onload = function() {
    let url = document.location.href;
	let params = url.split('?')[1].split('&')[0];
	name = decodeURIComponent(params.substring(params.indexOf('=') + 1));
	currentDepartment = name.split(' .')[1];
	name = name.split(' .')[0];
}

//perform a search query IN THE DATABASE under the 
//find the key of the desired person
//READ data from Database - using key
//display it with DOM
const FIREBASE_DATABASE = firebase.database();//access the database

FIREBASE_DATABASE.ref('/directory/academics/' + currentDepartment).once('value')
	.then((snapshot) => {
		console.log(name);
		console.log(currentDepartment);
		FIREBASE_DATABASE.ref('/directory/academics/' + currentDepartment).orderByChild("Name").equalTo(name).on("child_added", function(snapshot) {
  			key = snapshot.key;
		});

		FIREBASE_DATABASE.ref('/directory/academics/' + currentDepartment + '/' + key).once('value')
			.then((snapshot) => {
				console.log("/directory/academics/" + currentDepartment + "/" + key);
				console.log(snapshot.val());
				console.log(key);
				let div = document.createElement("div");
    			let information = document.createTextNode(snapshot.val().Name);
   				div.appendChild(information);
    			document.getElementById("roomNum").appendChild(div);
    		});
		//let div = document.createElement('div');
		//let domString = ``; //use template literals here
		//div.innerHTML = domString;
		////selectedElement.appendChild(div.firstChild);

	});

 //     var key = childSnapshot.key;
//      var childData = childSnapshot.val();
//
  //    var name_val = childSnapshot.val().Name;
    //  var id_val = childSnapshot.val().AssignedID;
      //document.getElementById("name").innerHTML = name_val;
     // document.getElementById("id").innerHTML = id_val;