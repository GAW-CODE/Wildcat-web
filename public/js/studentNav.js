/**
 * Built for the navigation of the student site
 */

 /* css class notes:
local navs use .off,.on
announcements use .off
modules use .off
nav use .active
*/

let announce = document.getElementById('nav-a');
let announces = document.getElementsByClassName('a');
let announceBody = document.getElementById('announce');
let message = document.getElementsByClassName('message-box');
let direct = document.getElementById('nav-d');
let directs = document.getElementsByClassName('d');
let directBody = document.getElementById('directory');

//between announce and directory
announce.addEventListener('click',
function(){
    announce.classList.remove("off");
    announce.classList.add("active");
    direct.classList.remove("active");
    for(let i = 0; i < announces.length; i++){
        announces[i].classList.remove("off");
    }
    for(let i = 0; i < directs.length; i++){
        directs[i].classList.add("off");
    }
    announceBody.classList.remove("off");
    directBody.classList.add("off");
});
direct.addEventListener('click',
function(){
    direct.classList.remove("off");
    direct.classList.add("active");
    announce.classList.remove("active");
    for(let i = 0; i < announces.length; i++){
        announces[i].classList.add("off");
    }
    for(let i = 0; i < directs.length; i++){
        directs[i].classList.remove("off");
    }
    announceBody.classList.add("off");
    directBody.classList.remove("off");
});

//between annoucements
for(let i = 0; i < announces.length; i++){
    announces[i].addEventListener('click',
    function(){
        for(let i = 0; i < announces.length; i++){
            announces[i].classList.remove("on");
            message[i].classList.add("off");
        }
        announces[i].classList.add("on");
        message[i].classList.remove("off");
    }
);
}

//between directories
for(let i = 0; i < directs.length; i++){
    directs[i].addEventListener('click',
    function(){
        for(let i = 0; i < directs.length; i++){
            directs[i].classList.remove("on");
        }
        directs[i].classList.add("on");
    }
);
}