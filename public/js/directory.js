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