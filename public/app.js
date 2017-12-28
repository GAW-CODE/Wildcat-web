/**
 * Logic for admin.html
*/

//Sidebar Logic

//Announcements Logic

//Making the erquest descrptions expand and condense
var desc = document.getElementsByClassName('reqDesc');
var req = document.getElementsByClassName('req');

for(var i = 0; i < req.length; i++){
    //req[i].addEventListener("click" , description(req[i]));
    req[i].addEventListener("click" , function(e){
        //console.log(e.path[2].childNodes[3].className);

        if(e.path[2].childNodes[3].className==="descHide"){
            e.path[2].childNodes[3].className = "descShow";
        }

        else{
            e.path[2].childNodes[3].className = "descHide";
        }
    });
}
