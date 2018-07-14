//The navigation for the new org page

//sidebar navigation code
let Sta = document.getElementById('Sta');
let Req = document.getElementById('Req');
let Inf = document.getElementById('Inf');
let status = document.getElementById('status');
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
let approve = document.getElementById('approve');
let send = document.getElementById('sent');
let reject = document.getElementById('reject');
let approveL = document.getElementById('approveList');
let sendL = document.getElementById('sendList');
let rejectL = document.getElementById('rejectList');

approve.addEventListener('click',
function(){
    approve.className = "tab active";
    send.className = "tab";
    reject.className = "tab";
    sendL.className = "announceList off";
    rejectL.className = "announceList off";
    approveL.classname = " ";
    approveL.classname = "announceList";
}
);

send.addEventListener('click',
function(){
    approve.className = "tab";
    send.className = "tab active";
    reject.className = "tab";
    approveL.classname = "announceList off";
    sendL.className = "announceList";
    rejectL.className = "announceList off";
}
);

reject.addEventListener('click',
function(){
    approve.className = "tab";
    send.className = "tab";
    reject.className = "tab active";
    approveL.classname = "announceList off";
    sendL.className = "announceList off";
    rejectL.className = "announceList";
}
);

//request navagation code

//profile navagation code