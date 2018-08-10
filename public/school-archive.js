const database = firebase.database();
const ref = database.ref("school-archive");
let data;
let date;
let month;
let announcementNode;
let textNode;
let months = document.querySelectorAll(".month");
let area = document.getElementById("area");

ref.on("child_added", function(snapshot, prevChildKey){
    data = snapshot.val();
    date = data.expirationDate;
    month = date.substring(4, 7);
    announcementNode = document.createElement("div");
    textNode = document.createTextNode(data.message);
    announcementNode.appendChild(textNode);
    for(let x = 0; x < months.length; x++){
        if(month == months[x].textContent.substring(0, 3)){
            area.insertBefore(announcementNode, months[x+1]);
        }
    }

}, function(errorObject){
    console.log("The read failed: " + errorObject.code);
});
