const FIREBASE_DATABASE = firebase.database();
let adminDiv = document.getElementById('admin');
let guidanceDiv = document.getElementById('guidance');
let asbDiv = document.getElementById('asb');
let campusorgsDiv = document.getElementById('campusorgs');
let athleticsDiv = document.getElementById('athletics');
let fundraisersDiv = document.getElementById('fundraisers');

//display announcements
function displayAnnouncement(announcement) {
	let div = document.createElement('div');
  //eventually - display organization's profile pic to the LEFT of the announcement title
  let domString = `<div class="saveable">
		<span><img class="logo" src="${announcement.userProfileImg}" /></span>
		<span class="announcement">
				${announcement.message}
		</span>
	</div>`;
  div.innerHTML = domString;

	//link to organization's contact book page if you click on its logo - use announcement.org
	//display titles?

	// Categorize the message (put it in the correct category)
	switch (announcement.orgType) {
		case 'Admin':
			adminDiv.appendChild(div.firstChild);
			break;
		case 'Guidance':
			guidanceDiv.appendChild(div.firstChild);
			break;
		case 'ASB':
			asbDiv.appendChild(div.firstChild);
			break;
		case 'Campus Org':
			campusorgsDiv.appendChild(div.firstChild);
			break;
		case 'Athletics':
			athleticsDiv.appendChild(div.firstChild);
			break;
		case 'Fundraiser':
			fundraisersDiv.appendChild(div.firstChild);
			break;
	}
}

FIREBASE_DATABASE.ref('/announcements').on('child_added', function(snapshot, prevChildKey) {
	console.log(snapshot.val());
  displayAnnouncement(snapshot.val());
});

//daily deletion of expired announcements
let annList = [];
FIREBASE_DATABASE.ref('/announcements').once('value') //using once b/c we are taking a snapshot once daily
	.then((snapshot) => {
		let val = snapshot.val();
		for (let key in val) {
			annList.push(key);
		}
		//loop that goes through each announcement and deletes at midnight
		let i = 0;
		while (i < annList.length)
		{	//annList[i] returns the key of the ith announcement in the database
			if ((new Date()).getTime() > Date.parse(val[annList[i]].expirationDate))
				//expirationDate is a property of each announcement object in the database
			{
				//retrieve announcement's key
				let archiveAnn;
				let selectedAnn = annList[i];
				let annKeyList = [];

				//placing the key values in an array
				FIREBASE_DATABASE.ref('/announcements').once('value')
			    .then((snapshot) => {
			      let val = snapshot.val();
			      for (let key in val) {
			        annKeyList.push(key);
				FIREBASE_DATABASE.ref('/announcements/' + annKeyList[i]).once('value')
				  .then((snapshot) => {
				    archiveAnn = snapshot.val();
						//print the announcement to be archived
				    console.log(archiveAnn);
				   });
				 })
				 //the actual moving part
         .then(() => {
				// insert announcement in school archive in database
				FIREBASE_DATABASE.ref('/schoolArchive/').push(archiveAnn);
				//remove announcement from announcements in database
				FIREBASE_DATABASE.ref('/announcements').child(annList[i]).remove()
				//remove from announce.html - remove the particular element
				selectedAnn.parentNode.removeChild(selectedAnn);
			})
			} else
			{
				i++;
			}
		}
		console.log('end of loop reached');
});

//search query
let searchIcon = document.getElementById('searchIcon');
let searchBar = document.getElementById('search');
let isSearchOn = false;

function toggleSearchBar() {
	console.log('toggle search bar');
	 if (!isSearchOn) { //start search process / search mode
			//collapse whole page - only display announcements
		 searchBar.removeAttribute('hidden');
			for (let i = 0; i < announcementsDiv.childNodes.length; i++) {
				if (announcementsDiv.childNodes[i].nodeType == Node.ELEMENT_NODE) {
					announcementsDiv.childNodes[i].style.display = 'none';
				}
			}
		 //blur whole screen
	 } else {
		 searchBar.setAttribute('hidden', 'true');
			for (let i = 0; i < announcementsDiv.childNodes.length; i++) {
				if (announcementsDiv.childNodes[i].nodeType == Node.ELEMENT_NODE) {
					announcementsDiv.childNodes[i].style.display = '';
				}
			}
	 }
	 isSearchOn = !isSearchOn;
}

function search() {
	console.log('search query');
 let filter = searchBar.value.toUpperCase();
 for (let i = 0; i < announcements.length; i++) {
	 let annText = announcements[i].getElementsByClassName('announcement')[0].innerHTML;
	 if (annText.toUpperCase().indexOf(filter) != -1) { //match found
		 announcements[i].style.display = '';
			console.log(filter);
			announcements[i].parentNode.style.display = '';
	 } else {
		 announcements[i].style.display = 'none';
			announcements[i].parentNode.style.display = 'none';
	 }
 }
}

//get the date
let n = new Date();
let y = n.getFullYear();
let m = n.getMonth() + 1;
let d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

//if announcement is pressed down
let timeoutId = 0;
for (let i = 0; i < announcements.length; i++) {
	announcements[i].addEventListener('mousedown', function() {
	    timeoutId = setTimeout(save(), 3000);
	}).addEventListener('mouseup mouseleave', function() {
	    clearTimeout(timeoutId);
	});
}

//send announcement
function saveTo(){
//clone

//send to student archive


}

//be able to delete saved msgs
//if held down for 2 seconds, prompt for deletion? yes and no button
studentAnnouncements.on('mousedown', function() {
    timeoutId = setTimeout(save(), 3000);
}).on('mouseup mouseleave', function() {
    clearTimeout(timeoutId);
//get key of this announcement
let sAnnouncekey = //snapshot?
FIREBASE_DATABASE.ref().child('/announcements/keyOfThis').remove();

//student archive
let announcements = document.getElementsByClassName('saveable');

for (let i = 0; i < announcements.length; i++) {
	announcements[i].addEventListener("click", function() {
		//display "SAVED" momentarily

		//turn bkgd to gold
		announcements.style.background = "#edbe31";

		//add announcement to student archive
	});
}
