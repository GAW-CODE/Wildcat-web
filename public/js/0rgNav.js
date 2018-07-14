//The navigation for the new org page

//sidebar navigation code
let Sta = document.getElementById('Sta');
let Req = document.getElementById('Req');
let Inf = document.getElementById('Inf');
let status = document.getElementById('statusMods');
let request = document.getElementById('request');
let profile = document.getElementById('profile');

//Switching page
Sta.addEventListener('click', function () {
    status.style.display = 'block';
    request.style.display = 'none';
    profile.style.display = 'none';
    Sta.style.backgroundColor = '#E9E9E9';
    Req.style.backgroundColor = 'initial';
    Inf.style.backgroundColor = 'initial';
})

Req.addEventListener('click', function () {
    status.style.display = 'none';
    request.style.display = 'block';
    profile.style.display = 'none';
    Sta.style.backgroundColor = 'initial';
    Req.style.backgroundColor = '#E9E9E9';
    Inf.style.backgroundColor = 'initial';
})

Inf.addEventListener('click', function () {
    status.style.display = 'none';
    request.style.display = 'none';
    profile.style.display = 'block';
    Sta.style.backgroundColor = 'initial';
    Req.style.backgroundColor = 'initial';
    Inf.style.backgroundColor = '#E9E9E9';
})



//status navigation code

//request navagation code

//profile navagation code