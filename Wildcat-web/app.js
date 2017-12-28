/**
 * Logic for admin.html
*/

//Sidebar Logic

//Announcements Logic
var desc = document.getElementsByClassName('reqDesc');
var req = document.getElementsByClassName('req');

var temp = 0;
for(var i = 0; i < req.length; i++){
    //req[i].addEventListener("click" , description(req[i]));
    temp = req[i];
    req[i].addEventListener("click" , function(temp){
        console.log(temp);
    });
}

function description(selection){
    var check = true;
    console.log(selection);
    if(check){
        console.log("true");
        selection.childNodes[1].class = "descHide";
        check = false;
    }
    else{
        console.log("false");
        selection.childNodes[1].class = "reqDesc";
        check = true;
    }
}