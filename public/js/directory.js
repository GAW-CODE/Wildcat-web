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

const FIREBASE_DATABASE = firebase.database();//access the database

FIREBASE_DATABASE.ref('/directory/groups').push();
FIREBASE_DATABASE.ref('/directory/sports/fall').push();
FIREBASE_DATABASE.ref('/directory/sports/winter').push();
FIREBASE_DATABASE.ref('/directory/sports/spring').push();

FIREBASE_DATABASE.ref('/directory/groups').push({
    Name: 'Associated Student Body',
    Description:'TBD',
    MeetingInfo: 'TBD',
    COach: 'TBD',
    Dates: 'TBD', 
    Presidents: 'TBD',
    SocialMedia: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/groups').push({
    Name: 'AVID',
    Description:'TBD',
    MeetingInfo: 'TBD',
    COach: 'TBD',
    Dates: 'TBD', 
    Presidents: 'TBD',
    SocialMedia: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/groups').push({
    Name: 'Cyber Patriots',
    Description:'TBD',
    MeetingInfo: 'TBD',
    COach: 'TBD',
    Dates: 'TBD', 
    Presidents: 'TBD',
    SocialMedia: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/groups').push({
    Name: 'Dance',
    Description:'TBD',
    MeetingInfo: 'TBD',
    COach: 'TBD',
    Dates: 'TBD', 
    Presidents: 'TBD',
    SocialMedia: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/groups').push({
    Name: 'English Lang. Learner',
    Description:'TBD',
    MeetingInfo: 'TBD',
    COach: 'TBD',
    Dates: 'TBD', 
    Presidents: 'TBD',
    SocialMedia: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/groups').push({
    Name: 'International Baccalaureate',
    Description:'TBD',
    MeetingInfo: 'TBD',
    COach: 'TBD',
    Dates: 'TBD', 
    Presidents: 'TBD',
    SocialMedia: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/groups').push({
    Name: 'Mock Trial',
    Description:'TBD',
    MeetingInfo: 'TBD',
    COach: 'TBD',
    Dates: 'TBD', 
    Presidents: 'TBD',
    SocialMedia: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/groups').push({
    Name: 'Robotics',
    Description:'TBD',
    MeetingInfo: 'TBD',
    COach: 'TBD',
    Dates: 'TBD', 
    Presidents: 'TBD',
    SocialMedia: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/groups').push({
    Name: 'Royal Wilson Marching Alliance',
    Description:'TBD',
    MeetingInfo: 'TBD',
    COach: 'TBD',
    Dates: 'TBD', 
    Presidents: 'TBD',
    SocialMedia: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/groups').push({
    Name: 'Science Olympiad',
    Description:'TBD',
    MeetingInfo: 'TBD',
    COach: 'TBD',
    Dates: 'TBD', 
    Presidents: 'TBD',
    SocialMedia: 'TBD',
    Other: 'TBD'
});

FIREBASE_DATABASE.ref('/directory/sports/fall').push({
    Name: 'Boys Waterpolo',
    Coach: 'TBD',
    Email: 'TBD',
    PhoneNumber: 'TBD', 
    Dates: 'TBD',
    Captains: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/sports/fall').push({
    Name: 'Cheer',
    Coach: 'TBD',
    Email: 'TBD',
    PhoneNumber: 'TBD', 
    Dates: 'TBD',
    Captains: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/sports/fall').push({
    Name: 'Cross Country',
    Coach: 'TBD',
    Email: 'TBD',
    PhoneNumber: 'TBD', 
    Dates: 'TBD',
    Captains: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/sports/fall').push({
    Name: 'Football',
    Coach: 'TBD',
    Email: 'TBD',
    PhoneNumber: 'TBD', 
    Dates: 'TBD',
    Captains: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/sports/fall').push({
    Name: 'Girls Golf',
    Coach: 'TBD',
    Email: 'TBD',
    PhoneNumber: 'TBD', 
    Dates: 'TBD',
    Captains: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/sports/fall').push({
    Name: 'Girls Tennis',
    Coach: 'TBD',
    Email: 'TBD',
    PhoneNumber: 'TBD', 
    Dates: 'TBD',
    Captains: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/sports/fall').push({
    Name: 'Girls Volleyball',
    Coach: 'TBD',
    Email: 'TBD',
    PhoneNumber: 'TBD', 
    Dates: 'TBD',
    Captains: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/sports/winter').push({
    Name: 'Girls Waterpolo',
    Coach: 'TBD',
    Email: 'TBD',
    PhoneNumber: 'TBD', 
    Dates: 'TBD',
    Captains: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/sports/winter').push({
    Name: 'Boys Basketball',
    Coach: 'TBD',
    Email: 'TBD',
    PhoneNumber: 'TBD', 
    Dates: 'TBD',
    Captains: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/sports/winter').push({
    Name: 'Girls Basketball',
    Coach: 'TBD',
    Email: 'TBD',
    PhoneNumber: 'TBD', 
    Dates: 'TBD',
    Captains: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/sports/winter').push({
    Name: 'Boys Soccer',
    Coach: 'TBD',
    Email: 'TBD',
    PhoneNumber: 'TBD', 
    Dates: 'TBD',
    Captains: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/sports/winter').push({
    Name: 'Wrestling',
    Coach: 'TBD',
    Email: 'TBD',
    PhoneNumber: 'TBD', 
    Dates: 'TBD',
    Captains: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/sports/winter').push({
    Name: 'Girls Soccer',
    Coach: 'TBD',
    Email: 'TBD',
    PhoneNumber: 'TBD', 
    Dates: 'TBD',
    Captains: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/sports/spring').push({
    Name: 'Badminton',
    Coach: 'TBD',
    Email: 'TBD',
    PhoneNumber: 'TBD', 
    Dates: 'TBD',
    Captains: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/sports/spring').push({
    Name: 'Baseball',
    Coach: 'TBD',
    Email: 'TBD',
    PhoneNumber: 'TBD', 
    Dates: 'TBD',
    Captains: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/sports/spring').push({
    Name: 'Swimming',
    Coach: 'TBD',
    Email: 'TBD',
    PhoneNumber: 'TBD', 
    Dates: 'TBD',
    Captains: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/sports/spring').push({
    Name: 'Softball',
    Coach: 'TBD',
    Email: 'TBD',
    PhoneNumber: 'TBD', 
    Dates: 'TBD',
    Captains: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/sports/spring').push({
    Name: 'Boys Tennis',
    Coach: 'TBD',
    Email: 'TBD',
    PhoneNumber: 'TBD', 
    Dates: 'TBD',
    Captains: 'TBD',
    Other: 'TBD'
});
FIREBASE_DATABASE.ref('/directory/sports/spring').push({
    Name: 'Track and Field',
    Coach: 'TBD',
    Email: 'TBD',
    PhoneNumber: 'TBD', 
    Dates: 'TBD',
    Captains: 'TBD',
    Other: 'TBD'
});
