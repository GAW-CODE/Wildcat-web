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

mathDir.addEventListener('click', function(){
    academics.className = "hide";
    math.className="show";
});

engDir.addEventListener('click', function(){
    academics.className = "hide";
    eng.className="show";
});

histDir.addEventListener('click', function(){
    academics.className = "hide";
    hist.className="show";
});

sciDir.addEventListener('click', function(){
    academics.className = "hide";
    sci.className="show";
});

peDir.addEventListener('click', function(){
    academics.className = "hide";
    pe.className="show";
});

witsDir.addEventListener('click', function(){
    academics.className = "hide";
    wits.className="show";
});

vapaDir.addEventListener('click', function(){
    academics.className = "hide";
    vapa.className="show";
});

modDir.addEventListener('click', function(){
    academics.className = "hide";
    lang.className="show";
});

/*sports directory*/
var fall = document.getElementById('fall');
var winter = document.getElementById('winter');
var spring = document.getElementById('spring');

fall.addEventListener('click', function(){
    sports.className = "hide";
    SFall.className="show";
});

winter.addEventListener('click', function(){
    sports.className = "hide";
    SWinter.className="show";
});

spring.addEventListener('click', function(){
    sports.className = "hide";
    SSpring.className="show";
});



// FIREBASE_DATABASE.ref('/directory/sports/fall').push();
// FIREBASE_DATABASE.ref('/directory/sports/spring').push();
// FIREBASE_DATABASE.ref('/directory/sports/winter').push();
// FIREBASE_DATABASE.ref('/directory/academics/socialStudies').push();
// FIREBASE_DATABASE.ref('/directory/academics/math').push();
// FIREBASE_DATABASE.ref('/directory/academics/science').push();
// FIREBASE_DATABASE.ref('/directory/academics/english').push();
// FIREBASE_DATABASE.ref('/directory/academics/pe').push();
// FIREBASE_DATABASE.ref('/directory/academics/wits').push();
// FIREBASE_DATABASE.ref('/directory/academics/vapa').push();
// FIREBASE_DATABASE.ref('/directory/academics/modernLanguages').push();
// FIREBASE_DATABASE.ref('/directory/groups').push();
// FIREBASE_DATABASE.ref('/directory/clubs').push();

const FIREBASE_DATABASE = firebase.database();//access the database 

FIREBASE_DATABASE.ref('/directory/academics/math').push({
    Name: 'Allen, Willie',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/english').push({
    Name: 'Arteaga, Ember',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/socialStudies').push({
    Name: 'Barone, Samuel',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/english').push({
    Name: 'Barragan, Gino',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/science').push({
    Name: 'Branconier- Habash, Patricia',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/vapa').push({
    Name: 'Brown, DeJohn',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/math').push({
    Name: 'Bushyeager, Courtney',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/wits').push({
    Name: 'Bushyeager, Courtney',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/english').push({
    Name: 'Casey, Josipa',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/math').push({
    Name: 'Chang, Leo',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/modernLanguages').push({
    Name: 'Chang, Leo',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/pe').push({
    Name: 'Chang, Nina',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/vapa').push({
    Name: 'Craft, Kiley',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/math').push({
    Name: 'Eusebi, Jason',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/science').push({
    Name: 'Fessenden, Mark',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/vapa').push({
    Name: 'Gilbert, Matthew',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/english').push({
    Name: 'Gomez, Mike',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/science').push({
    Name: 'Han, Jungsoo',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/vapa').push({
    Name: 'Hansen, Scot',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/vapa').push({
    Name: 'Hernandez, Kelly',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/modernLanguages').push({
    Name: 'Hinojosa, Miguel',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/modernLanguages').push({
    Name: 'Johnson, Maria',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/math').push({
    Name: 'Kim, Mijin',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/science').push({
    Name: 'Leon, Ernesto',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/english').push({
    Name: 'Leung, Lisa',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/math').push({
    Name: 'Lin, Tamara',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/pe').push({
    Name: 'Lopez, Jerelyn',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/socialStudies').push({
    Name: 'Lorenz, Mike ',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/wits').push({
    Name: 'Manassero, Mike',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/math').push({
    Name: 'Nguyen, Catherine',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/modernLanguages').push({
    Name: 'Ortega-Carcamo, Johana',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/modernLanguages').push({
    Name: 'Orth, Liz',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/pe').push({
    Name: 'Ortiz, Salvador',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/socialStudies').push({
    Name: 'Oviedo, Robert',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/science').push({
    Name: 'Pham, Chris',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/english').push({
    Name: 'Piner, Mary-Louise',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/modernLanguages').push({
    Name: 'Recinos, Ricardo',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/science').push({
    Name: 'Ro, Justin',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/wits').push({
    Name: 'Ro, Justin',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/english').push({
    Name: 'Robles, Pilar',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/socialStudies').push({
    Name: 'Rogan, Robert',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/wits').push({
    Name: 'Rojas, Matthew',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/english').push({
    Name: 'Rouw, Christina',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/english').push({
    Name: 'Santos, Enid',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/modernLanguages').push({
    Name: 'Shin, Eilene',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/math').push({
    Name: 'Suh, David',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/socialStudies').push({
    Name: 'Suh, David',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/socialStudies').push({
    Name: 'Thompson, Mark',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/science').push({
    Name: 'Trimborn, Trent',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/science').push({
    Name: 'Udeshi, Jinasha',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/english').push({
    Name: 'Valentine, Chris',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/socialStudies').push({
    Name: 'Van Gorden, Claudia',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/modernLanguages').push({
    Name: 'Wann, Suzanna',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/vapa').push({
    Name: 'Weaver, Kim',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/math').push({
    Name: 'Weiss, Cindy',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/math').push({
    Name: 'Wever, Michael',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/science').push({
    Name: 'Wu, Sharon',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/english').push({
    Name: 'Yep, Monica',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/math').push({
    Name: 'Young, Shirley',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/socialStudies').push({
    Name: 'Zertuche, Donna',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/academics/math').push({
    Name: 'Zheng, Yan',
    Pic: 'https://developers.google.com/experts/img/user/user-default.png',
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD',
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD'
});

FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Campus Light',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'CODE',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Red Cross',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Eco-Buds',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Rotary Interact',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Debate',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Salvation Army',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Promoting Animal Welfare',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'American Heart Association',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Best Buddies',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Korean Culture CLub',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Global Orphan Project',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'HOSA',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Cullinary Crew',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Liberty in North Korea',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'TILE',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'MIT Launch',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: "KIWIN'S",
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Team Up for St. Judes',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Music Beats the Heart',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Chess Club',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'MOVE',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Operation Smile',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'ASL Club',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Anime Club',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'UNICEF',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'NHS',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Key Club',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Someone Loves You',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'eSports CLub',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Girl Up',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Art for Heart',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Students Supporting Students',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'CA Scholarship Federation',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'FBLA',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Pencils of Promise',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Model UN',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Investment Club',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Gay Straight Alliance',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Magic Club',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Dude Be Nice',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Surfrider Org.',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Spanish Honor Society',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Junior State of America',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/directory/clubs').push({
    Name: 'Creative Writing',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});



//Get contact info from database when you click on a contact card


//Display / render this contact info onto a template (using DOM)
