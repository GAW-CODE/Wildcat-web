/**
 * Logic for admin.html
*/

//Sidebar Logic
var modButtons = document.getElementsByClassName("navModule");
var modules = document.getElementsByClassName("off");
var announce = modules[0];
var staff = modules[1];
var calendar = modules [2];
var map = modules[3];

//changes the modules per sidebar
modManage(announce, staff, calendar, map);
for(var i = 0; i < modButtons.length; i++){
    modButtons[i].addEventListener('click', function(e){
        //console.log(e);
        var selection = e.srcElement.innerHTML;

        if(selection == modButtons[0].innerHTML){
            modManage(announce, staff, calendar, map);
            console.log("0 match");
        }
        else if(selection == modButtons[1].innerHTML){
            modManage(staff, announce, calendar, map);
            console.log("1 match");
        }
        else if(selection == modButtons[2].innerHTML){
            modManage(calendar, staff, announce, map);
            console.log("2 match");
        }
        else{
            modManage(map, staff, calendar, announce);
            console.log("else");
        }
    });
}

//shows one module, hides the other three
function modManage(mod0, mod1, mod2, mod3){
    mod0.className = "module"
    mod1.className = "off";
    mod2.className = "off";
    mod3.className = "off";
}

//Announcements Logic

//Making the erquest descrptions expand and condense
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
    }, true);
}
