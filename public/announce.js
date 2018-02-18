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
  let domString = `<div>
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