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
//makes array containing all announcements
let annList = [];

//TODO: repeat this code every day at midnight
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
			if ((new Date()).getTime() > val[annList[i]].expirationDate) //expirationDate is a property of each announcement object in the database
			{
				FIREBASE_DATABASE.ref().child('/announcements/' + annList[i]).remove();
			} else
			{
				i++;
			}
		}
});

//function to convert a date to Epoch time, milliseconds since Jan 1 1970
//not sure how to reference a variable from a different file??
function convertToEpoch(){
	expirationDate.dd = dd - 1;
	expirationDate.mm = mm - 1;
	expirationDate.yyyy = yyyy - 1970;

	d = d * 86400000;
	if (m = 1 || 3 || 5 || 7 || 8 || 10 || 12)
		{
			m = m * 86400000 * 31;
		}
	if (m = 4 || 6 || 9 || 11)
		{
			m = m * 86400000 * 30;
		}
  if (m = 2)
		{
			m = m * 86400000 * 27;
		}
  y = y * 86400000 * 365.2422;

	let dateInEpoch = d + m + y - 26000;
	return dateInEpoch;
}

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
