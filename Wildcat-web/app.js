/**
 * Logic for admin.html
*/

//Sidebar Logic

//Announcements Logic
var desc = document.getElementsByClassName('reqDesc');
var req = document.getElementsByClassName('req');

req.addEventListener("click", hideReq);

function hideReq(){
    desc.classList.toggle("descHide");
 }
