/**
 * This is the DOM behind organization.html (below code)
*/

//sidebar selections
//sidebar & button selections

let status = document.getElementsByClassName('modItem')[0];
let request = document.getElementsByClassName('modItem')[1];
let info = document.getElementsByClassName('modItem')[2];
let edit = document.getElementById('editOrg');
let cancel = document.getElementById('cancel');
let rTabs = document.getElementsByClassName('reqtab');
let rEvent = document.getElementById('reqEvent');
let rAnnounce = document.getElementById('reqAnnounce');

//module selections
let sMod = document.getElementById('status');
let rMod = document.getElementById('req');
let iMod = document.getElementById('org');
let eMod = document.getElementById('orgEdit');
//event listening, clicks
status.addEventListener('click', function(){
    sMod.className = "module";
    rMod.className = "module hide";
    iMod.className = "module hide";
    eMod.className = "module hide";
});
request.addEventListener('click', function(){
    sMod.className = "module hide";
    rMod.className = "module";
    iMod.className = "module hide";
    eMod.className = "module hide";
});
info.addEventListener('click', function(){
    sMod.className = "module hide";
    rMod.className = "module hide";
    iMod.className = "module";
    eMod.className = "module hide";
});
edit.addEventListener('click', function(){
    iMod.className = "module hide";
    eMod.className = "module";
});
cancel.addEventListener('click', function(){
    iMod.className = "module";
    eMod.className = "module hide";
});
rTabs[0].addEventListener('click', function(){
    rTabs[0].className = "reqTab reqTabOn";
    rTabs[1].className = "reqTab";
    rAnnounce.className = "requestSpace";
    rEvent.className = "requestSpace hide";
})
rTabs[1].addEventListener('click', function(){
    rTabs[1].className = "reqTab reqTabOn";
    rTabs[0].className = "reqTab";
    rAnnounce.className = "requestSpace hide";
    rEvent.className = "requestSpace";
})