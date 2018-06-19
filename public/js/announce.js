const FIREBASE_DATABASE = firebase.database();
const FIREBASE_STORAGE = firebase.storage();
const FIREBASE_AUTH = firebase.auth();
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

	let announceDiv = div.firstChild;

	//student archive

	//if user swipes on the announcement

	//source: https://developers.google.com/web/fundamentals/design-and-ux/input/touch/
	// if (window.PointerEvent) { //check if the browser supports PointerEvent API
	// 	announceDiv.addEventListener('pointerdown', this.handleGestureStart, true);
	//   announceDiv.addEventListener('pointermove', this.handleGestureMove, true);
	//   announceDiv.addEventListener('pointerup', this.handleGestureEnd, true);
	//   announceDiv.addEventListener('pointercancel', this.handleGestureEnd, true);
	// } else { //if the browser does NOT support PointerEvent API, use TouchEvent or MouseEvent
	// 	announceDiv.addEventListener('touchstart', this.handleGestureStart, true);
	//   announceDiv.addEventListener('touchmove', this.handleGestureMove, true);
	//   announceDiv.addEventListener('touchend', this.handleGestureEnd, true);
	//   announceDiv.addEventListener('touchcancel', this.handleGestureEnd, true);
	// 	announceDiv.addEventListener('mousedown', this.handleGestureStart, true);
	// }

	//source: https://css-tricks.com/simple-swipe-with-vanilla-javascript/

	let x0 = null;
	let locked = false;
	let w, f, dx;
	let ini, fin, anf;

	const NF = 30; //# frames
	let rID = null;
	const TFN = {
		'bounce-out': function(k, n = 3, a = 2.75, b = 1.5) {
			return 1 - Math.pow(1 - k, a) * Math.abs(Math.cos(Math.pow(k, b) * (n + 0.5) * Math.PI))
		}
	};
	var n;

	function stopAni() {
		cancelAnimationFrame(rID);
		rID = null;
	};
	function ani(cf = 0) {
		announceDiv.style.setProperty('--i', ini + (fin - ini) * TFN['bounce-out'](cf / anf));

		if (cf === anf) {
			stopAni();
			return;
		}

		rID = requestAnimationFrame(ani.bind(this, ++cf));
	};

	size();
	addEventListener('resize', size, false);

	function size() { w = window.innerWidth };
	function lock(e) {
		x0 = unify(e).clientX;
		locked = true;
		//announceDiv.classList.toggle('smooth', !(locked = true));
	};
	function drag(e) {
		e.preventDefault();

		if (locked && (x0 || x0 === 0)) {
			console.log('drag');
			dx = unify(e).clientX - x0;
			f = dx / w;
			if (f < -.05) {
				console.log(`${dx}px`);
				//only drag if swipe is at least 5% width and is left
				announceDiv.style.setProperty('--i', `${dx}px`);
			}
		}
	};
	function stop(e) {
		if (locked) {
			console.log('stop');

			ini = dx - Math.sign(dx) * f;
			fin = dx;
			anf = Math.round(f * NF);
			n = 2 + Math.round(f);
			ani();

			//announceDiv.style.setProperty('--i', '0px');
			//announceDiv.style.setProperty('--f', f);
			//announceDiv.classList.toggle('smooth', !(locked = false));
			x0 = null;
			locked = false;

			if (f < -.20) {
				//save announcement if swipe is at least 20% width and is left
				console.log("saving announcement");

				//turn bkgd to gold
				announceDiv.style.background = "#edbe31";

				//TODO: make sure background stays gold when user refreshes the page or returns later to announce.html - check inside displayAnnouncement() ?

				//add announcement to student-archive folder in database under user id
				FIREBASE_DATABASE.ref('student-archive/' + FIREBASE_AUTH.currentUser.uid).push(announcement);

				//TODO: ensure no duplicate announcements in the student-archive folder in the database

				//display "SAVED" momentarily - unhide SAVED <p>
			}
		}
	};
	function unify(e) { return e.changedTouches ? e.changedTouches[0] : e };

	announceDiv.addEventListener('mousedown', lock, false);
	announceDiv.addEventListener('touchstart', lock, false);

	//move announceDiv while it is being dragged
	announceDiv.addEventListener('mousemove', drag, false);
	announceDiv.addEventListener('touchmove', drag, false);

	//stop announceDiv when touch is over
	announceDiv.addEventListener('mouseup', stop, false);
	announceDiv.addEventListener('touchend', stop, false);


	//link to organization's contact book page if you click on its logo - use announcement.org
	//display titles?

	// Categorize the message (put it in the correct category)
	switch (announcement.orgType) {
		case 'Admin':
			adminDiv.appendChild(announceDiv);
			break;
		case 'Guidance':
			guidanceDiv.appendChild(announceDiv);
			break;
		case 'ASB':
			asbDiv.appendChild(announceDiv);
			break;
		case 'Campus Org':
			campusorgsDiv.appendChild(announceDiv);
			break;
		case 'Athletics':
			athleticsDiv.appendChild(announceDiv);
			break;
		case 'Fundraiser':
			fundraisersDiv.appendChild(announceDiv);
			break;
	}
}

FIREBASE_DATABASE.ref('/announcements').on('child_added', function(snapshot, prevChildKey) {
	console.log(snapshot.val());
  displayAnnouncement(snapshot.val());
});

//array containing ALL announcements on the page (except for the placeholder ones)
let announcements = document.getElementsByClassName('saveable');

//daily deletion of expired announcements
let annList = []; //annList[i] returns the key of the ith announcement in the database
let annMessage = [];
FIREBASE_DATABASE.ref('/announcements').once('value') //using once b/c we are taking a snapshot once daily
	.then((snapshot) => {
		let val = snapshot.val();
		for (let key in val) {
			annList.push(key);
			annMessage.push(val[key].message);
		}
		//loop that goes through each announcement and deletes at midnight
		let i = 0;
		while (i < annList.length)
		{
			if ((new Date()).getTime() > Date.parse(val[annList[i]].expirationDate))
			//expirationDate is a property of each announcement object in the database
			{
				//get message of each announcement, contained in array that contains text in each announcement
				let currentMessage = annMessage[i];
				let annText;

				//find the DOM element containing the announcement
				let j = 0;
				while (j < announcements.length)
				{
					console.log(j);
					annText = announcements[j].getElementsByClassName('announcement')[0].innerHTML;
					if (annText.indexOf(currentMessage) != -1)
					{	//the actual moving part
						//insert announcement in school archive in database
						FIREBASE_DATABASE.ref('/school-archive').push(val[annList[i]]);
						//remove announcement from announcements in database
						FIREBASE_DATABASE.ref('/announcements').child(annList[i]).remove();

						//needed to prevent infinite loop! - https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript?page=1&tab=votes#tab-top
						annList.splice(j, 1);
						annMessage.splice(j, 1);

						//remove from announce.html - remove the particular element using DOM
						announcements[j].remove();

						break; //do not continue on
					}
					else
					{
						j++;
					}
				}
			}
			else
		 	{
				console.log(i);
				i++;
			}
		}
		console.log('end of loop reached');
});

//search query
let searchIcon = document.getElementById('searchIcon');
let searchBar = document.getElementById('search');
let announcementsDiv = document.getElementById('news');
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
			//announcements[i].parentNode.style.display = 'none';
		}
	}
}

//get the date
let n = new Date();
let y = n.getFullYear();
let m = n.getMonth() + 1;
let d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

//display image attachments
let storageRef = FIREBASE_STORAGE.ref();
storageRef.child('announcements/Untitled4.png').getDownloadURL().then(function(url) {
  // `url` is the download URL for 'images/stars.jpg'
  img.src = url;
	console.log(url);
}).catch(function(error) {
  // Handle any errors
	console.log(error);
});


//TODO: modularize this into a function, use classes instead of id
let modal = document.getElementById('modal1');
let img = document.getElementById('imgattach1');
let modalImg = document.getElementById("img01");

img.onclick = function() {
		modal.style.display = "block";
		modalImg.src = this.src;
}

let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
	modal.style.display = "none";
}

// //be able to delete saved msgs
// //if held down for 2 seconds, prompt for deletion? yes and no button
// studentAnnouncements.on('mousedown', function() {
//     timeoutId = setTimeout(save(), 3000);
// }).on('mouseup mouseleave', function() {
//     clearTimeout(timeoutId);
// //get key of this announcement
// let sAnnouncekey = //snapshot?
// FIREBASE_DATABASE.ref().child('/announcements/keyOfThis').remove();
