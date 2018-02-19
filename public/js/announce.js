const FIREBASE_DATABASE = firebase.database();
let adminDiv = document.getElementById('admin');
let guidanceDiv = document.getElementById('guidance');
let asbDiv = document.getElementById('asb');
let campusorgsDiv = document.getElementById('campusorgs');
let athleticsDiv = document.getElementById('athletics');
let fundraisersDiv = document.getElementById('fundraisers');

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

//display announcements
FIREBASE_DATABASE.ref('/announcements').on('child_added', function(snapshot, prevChildKey) {
	console.log(snapshot.val());
  displayAnnouncement(snapshot.val());
});

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
//daily deletion of expired announcements
let annList = [];

//TODO: repeat this code every day at midnight
//may need to involve server, computer can't always be running
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
			if ((new Date()).getTime() > Date.parse(val[annList[i]].expirationDate)) //expirationDate is a property of each announcement object in the database
			{
				FIREBASE_DATABASE.ref().child('/announcements/' + annList[i]).remove();
			} else
			{
				i++;
			}
		}
});

//search query
let searchIcon = document.getElementById('searchIcon');
let searchBar = document.getElementById('search');
let isSearchOn = false;

function toggleSearchBar() {
	if (!isSearchOn) { //start search process / search mode
		searchBar.removeAttribute('hidden');
		//blur whole screen
	} else {
		searchBar.setAttribute('hidden', 'true');
	}
	isSearchOn = !isSearchOn;
}

function search() {
	let filter, ul, li, a, i;
	//filter = searchBar
}

// When the page loads, the script indexes the content of all li’s into browser’s memory.
// When a user types text into the search field, the script searches for equivalents among the indexed data and hides the corresponding li’s where no equivalents were found. If nothing found, a message is shown.
// The script highlights the text equivalents by replacing phases, for example, babylon becomes <span class="highlight">babylon</span>.


//get the date
let n = new Date();
let y = n.getFullYear();
let m = n.getMonth() + 1;
let d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

//if announcement is pressed down
var timeoutId = 0;

announcements.on('mousedown', function() {
    timeoutId = setTimeout(save(), 3000);
}).on('mouseup mouseleave', function() {
    clearTimeout(timeoutId);
});
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
