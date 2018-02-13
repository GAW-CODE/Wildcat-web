
//Any database code should go above
//This is the DOM behind organization.html (below code)

//sidebar selections
let status = document.getElementsByClassName('modItem')[0];
let request = document.getElementsByClassName('modItem')[1];
let info = document.getElementsByClassName('modItem')[2];
//module selections
let sMod = document.getElementById('status');
let rMod = document.getElementById('req');
let iMod = document.getElementById('org');
//event listening
status.addEventListener('click', function(){
    sMod.className = "module";
    rMod.className = "module hide";
    iMod.className = "module hide";
});

request.addEventListener('click', function(){
    sMod.className = "module hide";
    rMod.className = "module";
    iMod.className = "module hide";
});

info.addEventListener('click', function(){
    sMod.className = "module hide";
    rMod.className = "module hide";
    iMod.className = "module";
});