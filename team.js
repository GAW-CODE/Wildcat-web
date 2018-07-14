/**
 * for team.html
 */
var people = document.querySelectorAll(".person");
for(var i = 0; i < people.length; i++){
    people[i].addEventListener("mouseenter", function(e){
        e.path[0].children[0].className = "roleOn";
        e.path[0].children[1].className = "nameOn";
    });
    people[i].addEventListener("mouseleave", function(e){
        e.path[0].children[0].className = "role";
        e.path[0].children[1].className = "name";
    }); 
}

let year = document.getElementsByClassName("people");
let yearSelect = document.getElementsByClassName("year");

yearSelect[0].addEventListener("click",
function(){
    year[0].classList = "people";
    year[1].classList = "people off";
}
);

yearSelect[1].addEventListener("click",
function(){
    year[0].classList = "people off";
    year[1].classList = "people";
}
);