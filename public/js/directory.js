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




FIREBASE_DATABASE.ref('/directory/sports/fall').push();
FIREBASE_DATABASE.ref('/directory/sports/spring').push();
FIREBASE_DATABASE.ref('/directory/sports/winter').push();
FIREBASE_DATABASE.ref('/directory/academics/socialStudies').push();
FIREBASE_DATABASE.ref('/directory/academics/math').push();
FIREBASE_DATABASE.ref('/directory/academics/science').push();
FIREBASE_DATABASE.ref('/directory/academics/english').push();
FIREBASE_DATABASE.ref('/directory/academics/pe').push();
FIREBASE_DATABASE.ref('/directory/academics/wits').push();
FIREBASE_DATABASE.ref('/directory/academics/vapa').push();
FIREBASE_DATABASE.ref('/directory/academics/modernLanguages').push();
FIREBASE_DATABASE.ref('/directory/groups').push();
FIREBASE_DATABASE.ref('/directory/clubs').push();

FIREBASE_DATABASE.ref('/academics/math').push({
    Name: 'Allen, Willie',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/english').push({
    Name: 'Arteaga, Ember',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/socialStudies').push({
    Name: 'Barone, Samuel',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/english').push({
    Name: 'Barragan, Gino',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/science').push({
    Name: 'Branconier- Habash, Patricia',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/vapa').push({
    Name: 'Brown, DeJohn',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/math').push({
    Name: 'Bushyeager, Courtney',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/wits').push({
    Name: 'Bushyeager, Courtney',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/english').push({
    Name: 'Casey, Josipa',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/math').push({
    Name: 'Chang, Leo',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/modernLanguages').push({
    Name: 'Chang, Leo',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/pe').push({
    Name: 'Chang, Nina',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/vapa').push({
    Name: 'Craft, Kiley',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/math').push({
    Name: 'Eusebi, Jason',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/science').push({
    Name: 'Fessenden, Mark',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/vapa').push({
    Name: 'Gilbert, Matthew',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/english').push({
    Name: 'Gomez, Mike',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/science').push({
    Name: 'Han, Jungsoo',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/vapa').push({
    Name: 'Hansen, Scot',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/vapa').push({
    Name: 'Hernandez, Kelly',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/modernLanguages').push({
    Name: 'Hinojosa, Miguel',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/modernLanguages').push({
    Name: 'Johnson, Maria',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/math').push({
    Name: 'Kim, Mijin',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/science').push({
    Name: 'Leon, Ernesto',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/english').push({
    Name: 'Leung, Lisa',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/math').push({
    Name: 'Lin, Tamara',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/pe').push({
    Name: 'Lopez, Jerelyn',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/socialStudies').push({
    Name: 'Lorenz, Mike ',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/wits').push({
    Name: 'Manassero, Mike',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/math').push({
    Name: 'Nguyen, Catherine',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/modernLanguages').push({
    Name: 'Ortega-Carcamo, Johana',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/modernLanguages').push({
    Name: 'Orth, Liz',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/pe').push({
    Name: 'Ortiz, Salvador',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/socialStudies').push({
    Name: 'Oviedo, Robert',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/science').push({
    Name: 'Pham, Chris',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/english').push({
    Name: 'Piner, Mary-Louise',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/modernLanguages').push({
    Name: 'Recinos, Ricardo',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/science').push({
    Name: 'Ro, Justin',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/wits').push({
    Name: 'Ro, Justin',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/english').push({
    Name: 'Robles, Pilar',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/socialStudies').push({
    Name: 'Rogan, Robert',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/wits').push({
    Name: 'Rojas, Matthew',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/english').push({
    Name: 'Rouw, Christina',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/english').push({
    Name: 'Santos, Enid',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/modernLanguages').push({
    Name: 'Shin, Eilene',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/math').push({
    Name: 'Suh, David',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/socialStudies').push({
    Name: 'Suh, David',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/socialStudies').push({
    Name: 'Thompson, Mark',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/science').push({
    Name: 'Trimborn, Trent',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/science').push({
    Name: 'Udeshi, Jinasha',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/english').push({
    Name: 'Valentine, Chris',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/socialStudies').push({
    Name: 'Van Gorden, Claudia',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/modernLanguages').push({
    Name: 'Wann, Suzanna',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/vapa').push({
    Name: 'Weaver, Kim',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/math').push({
    Name: 'Weiss, Cindy',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/math').push({
    Name: 'Wever, Michael',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/science').push({
    Name: 'Wu, Sharon',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/english').push({
    Name: 'Yep, Monica',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/math').push({
    Name: 'Young, Shirley',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/socialStudies').push({
    Name: 'Zertuche, Donna',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});
FIREBASE_DATABASE.ref('/academics/math').push({
    Name: 'Zheng, Yan',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});

FIREBASE_DATABASE.ref('/academics/socialStudies').push({
    Name: ' Van Gorden, Claudia',
    Pic: 'http://anilana.com/images/profile-img.png'
    Quote: 'TBD',
    RoomNumber: 'TBD',
    Email:'TBD'
    Classes: 'TBD',
    OfficeHours: 'TBD',
    AskMeAbout: 'TBD',
});

FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Campus Light',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'CODE',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Red Cross',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Eco-Buds',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Rotary Interact',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Debate',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Salvation Army',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Promoting Animal Welfare',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'American Heart Association',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Best Buddies',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Korean Culture CLub',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Global Orphan Project',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'HOSA',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Cullinary Crew',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Liberty in North Korea',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'TILE',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'MIT Launch',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: "KIWIN'S",
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Team Up for St. Judes',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Music Beats the Heart',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Chess Club',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'MOVE',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Operation Smile',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'ASL Club',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Anime Club',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'UNICEF',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'NHS',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Key Club',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Someone Loves You',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'eSports CLub',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Girl Up',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Art for Heart',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Students Supporting Students',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'CA Scholarship Federation',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'FBLA',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Pencils of Promise',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Model UN',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Investment Club',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Gay Straight Alliance',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Magic Club',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Dude Be Nice',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Surfrider Org.',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Spanish Honor Society',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
    Name: 'Junior State of America',
    Description: 'TBD',
    MeetingInfo:'TBD',
    Advisor:'TBD',
    Dates:'TBD',
    President:'TBD',
    SocialMedia:'TBD',
    Other:'TBD'
});
FIREBASE_DATABASE.ref('/clubs').push({
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
