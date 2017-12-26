/**
 * Logic for admin.html
*/

//Sidebar Logic

//Announcements Logic
var desc = document.getElementsByClassName('reqDesc');
var req = document.getElementsByClassName('req');

for(var i = 0; i < req.length; i++){
    req[i].addEventListener('click', hideReq(i));
}

function hideReq(i){
    desc[i].classList.toggle("descHide");
 }
