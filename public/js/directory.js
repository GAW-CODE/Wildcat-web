/*interface js*/

/*them pages*/
var home = document.getElementById('directory');
var academics = document.getElementById('academicDirectory');
var sports = document.getElementById('sportsDirectory');
var SFall = document.getElementById('fallDirectory');
var SWinter = document.getElementById('winterDirectory');
var SSpring = document.getElementById('springDirectory');
var groups = document.getElementById('groupsContact');
var clubs = document.getElementById('clubsDirectory');
var math = document.getElementById('mathDirectory');
var hist = document.getElementById('socialStudiesDirectory');
var sci = document.getElementById('scienceDirectory');
var eng = document.getElementById('englishDirectory');
var pe = document.getElementById('peDirectory');
var wits = document.getElementById('witsDirectory');
var vapa = document.getElementById('vapaDirectory');
var lang = document.getElementById('modernLanguagesDirectory');

/*home direcotry*/
var schoolDir = document.getElementById('school');
var groupsDir = document.getElementById('groups');
var sportsDir = document.getElementById('sports');
var clubsDir = document.getElementById('clubs');
var mapDir = document.getElementById('map');


schoolDir.addEventListener('click', function(){
    home.className = "hide";
    academics.className="show";
});

groupsDir.addEventListener('click', function(){
    home.className = "hide";
    groups.className="show";
});

sportsDir.addEventListener('click', function(){
    home.className = "hide";
    sports.className="show";
});

clubsDir.addEventListener('click', function(){
    home.className = "hide";
    clubs.className="show";
});

/*academic directory*/
var mathDir = document.getElementById('math');
var engDir = document.getElementById('eng');
var histDir = document.getElementById('hist');
var sciDir = document.getElementById('sci');
var peDir = document.getElementById('pe');
var witsDir = document.getElementById('wits');
var vapaDir = document.getElementById('vapa');
var modDir = document.getElementById('mod');

let currentDepartment;

mathDir.addEventListener('click', function(){
    academics.className = "hide";
    math.className="show";
    currentDepartment = "math";
});

engDir.addEventListener('click', function(){
    academics.className = "hide";
    eng.className="show";
    currentDepartment = "english";
});

histDir.addEventListener('click', function(){
    academics.className = "hide";
    hist.className="show";
    currentDepartment = "socialStudies";
});

sciDir.addEventListener('click', function(){
    academics.className = "hide";
    sci.className="show";
    currentDepartment = "science";
});

peDir.addEventListener('click', function(){
    academics.className = "hide";
    pe.className="show";
    currentDepartment = "pe";
});

witsDir.addEventListener('click', function(){
    academics.className = "hide";
    wits.className="show";
    currentDepartment = "wits";
});

vapaDir.addEventListener('click', function(){
    academics.className = "hide";
    vapa.className="show";
    currentDepartment = "vapa";
});

modDir.addEventListener('click', function(){
    academics.className = "hide";
    lang.className="show";
    currentDepartment = "modernLanguages";
});

/*sports directory*/
var fall = document.getElementById('fall');
var winter = document.getElementById('winter');
var spring = document.getElementById('spring');

fall.addEventListener('click', function(){
    sports.className = "hide";
    SFall.className="show";
    currentDepartment = "fall";

});

winter.addEventListener('click', function(){
    sports.className = "hide";
    SWinter.className="show";
    currentDepartment = "winter";
});

spring.addEventListener('click', function(){
    sports.className = "hide";
    SSpring.className="show";
    currentDepartment = "spring";
});

//note: distinguish between staff and organizations

// let contactCardsStaff = document.getElementsByClassName('contacts-Staff');
// for (let i = 0; i < contactCardsStaff.length; i++) {
//   contactCardsStaff[i].addEventListener('click', function() {
//     let nameStaff = contactCardsStaff[i].getElementsByTagName('p')[0].innerHTML; //https://stackoverflow.com/questions/11633951/get-paragraph-text-inside-an-element
//     let urlStaff = 'card-template-staff.html?name=' + encodeURIComponent(nameStaff) + " ." + encodeURIComponent(currentDepartment);
//     document.location.href = urlStaff;
//   });
// }
//
// let contactCardsSports = document.getElementsByClassName('contact-Sports');
// for (let i = 0; i < contactCardsSports.length; i++) {
//   contactCardsSports[i].addEventListener('click', function() {
//     let nameSports = contactCardsSports[i].id;
//     let urlSports = 'card-template-sports.html?name=' + encodeURIComponent(nameSports) + " ." + encodeURIComponent(currentDepartment);
//     document.location.href = urlSports;
//   });
// }
//
// let contactCardsOrgs = document.getElementsByClassName('contacts-Orgs');
// for (let i = 0; i < contactCardsOrgs.length; i++) {
//   contactCardsOrgs[i].addEventListener('click', function() {
//     let nameOrgs = contactCardsOrgs[i].getElementsByTagName('p')[0].innerHTML; //https://stackoverflow.com/questions/11633951/get-paragraph-text-inside-an-element
//     let urlOrgs = 'card-template-orgs.html?name=' + encodeURIComponent(nameOrgs);
//     document.location.href = urlOrgs;
//   });
// }
//
// let directoryArr = new Array();
// for(let i = 0; i < contactCardsStaff.length; i++){
//     directoryArr.push(contactCardsStaff[i].getElementsByTagName('p')[0].innerHTML);
// }
// for(let i = 0; i < contactCardsSports.length; i++){
//     directoryArr.push(contactCardsSports[i].id);
// }
// for(let i = 0; i < contactCardsOrgs.length; i++){
//     directoryArr.push(contactCardsOrgs[i].getElementsByTagName('p')[0].innerHTML);
// }
//
// for(let index = 0; index < directoryArr.length; index++){
//     let node = document.createElement('li');
//     let text = document.createTextNode(directoryArr[index]);
//     node.appendChild(text);
//     document.getElementById("directoryList").appendChild(node);
// }
//
// function myFunction() {
//     let input = document.getElementById('searchBar');
//     let filter = input.value.toUpperCase();
//     let ul = document.getElementById('directoryList');
//     let li = document.getElementsById('ul');
//     for (let i = 0; i < li.length; i++) {
//
//     }
// }

//search query code
let searchIcon = document.getElementById('searchIcon');
let searchBar = document.getElementById('search');
let announcementsDiv = document.getElementById('news');
let isSearchOn = false;

function toggleSearchBar() {
	console.log('toggle search bar');
  if (!isSearchOn) { //start search process / search mode
		//collapse whole page - only display announcements
		searchBar.removeAttribute('hidden');
		// for (let i = 0; i < announcementsDiv.childNodes.length; i++) {
		// 	if (announcementsDiv.childNodes[i].nodeType == Node.ELEMENT_NODE) {
		// 		announcementsDiv.childNodes[i].style.display = 'none';
		// 	}
		// }
	 //blur whole screen
	} else {
    searchBar.setAttribute('hidden', 'true');
		// for (let i = 0; i < announcementsDiv.childNodes.length; i++) {
    //   if (announcementsDiv.childNodes[i].nodeType == Node.ELEMENT_NODE) {
    //     announcementsDiv.childNodes[i].style.display = '';
    //   }
		// }
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
