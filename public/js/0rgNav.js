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
    status.className = 'module';
    request.className = 'module off';
    profile.className = 'module off';
    Sta.className = 'sbTab on';
    Req.className = 'sbTab';
    Inf.className = 'sbTab';
});

Req.addEventListener('click', function () {
    status.className = 'module off';
    request.className = 'module';
    profile.className = 'module off';
    Sta.className = 'sbTab';
    Req.className = 'sbTab on';
    Inf.className = 'sbTab';
});

Inf.addEventListener('click', function () {
    status.className = 'module off';
    request.className = 'module off';
    profile.className = 'module';
    Sta.className = 'sbTab';
    Req.className = 'sbTab';
    Inf.className = 'sbTab on';
});



//status navigation code
let statusNav = document.getElementById('statusTabs');
let statusTabs = document.getElementsByClassName('tab');
let approveL = document.getElementById('approveList');
let sendL = document.getElementById('sendList');
let rejectL = document.getElementById('rejectList');
let currentTab = 0;
statusTabs[0].addEventListener('click',
  function(){
      statusTabs[0].className = "tab active";
      statusTabs[1].className = "tab";
      statusTabs[2].className = "tab";
      approveL.className = "first";
      sendL.className = "off";
      rejectL.className = "off";
      currentTab = 0;
  }
)

statusTabs[1].addEventListener('click',
  function(){
      statusTabs[0].className = "tab";
      statusTabs[1].className = "tab active";
      statusTabs[2].className = "tab";
      approveL.className = "off";
      sendL.className = "first";
      rejectL.className = "off";
      currentTab = 1;
  }
)

statusTabs[2].addEventListener('click',
  function(){
      statusTabs[0].className = "tab";
      statusTabs[1].className = "tab";
      statusTabs[2].className = "tab active";
      approveL.className = "off";
      sendL.className = "off";
      rejectL.className = "first";
      currentTab = 2;
  }
)

statusNav.addEventListener('wheel',
  function(e){
    if(e.wheelDelta < 0){
        if(currentTab == 0)statusTabs[2].click();
        else statusTabs[currentTab - 1].click();
    }
    else if(e.wheelDelta > 0){
        if(currentTab == 2)statusTabs[0].click();
        else statusTabs[currentTab + 1].click();

    }
  }
);

//request navagation code
let announcement = document.getElementById('announcement');
let event = document.getElementById('event');
let reqAnnouncement = document.getElementById('reqAnnouncement');
let reqEvent = document.getElementById('reqEvent');

announcement.addEventListener('click', function () {
    reqAnnouncement.style.display = 'block';
    reqEvent.style.display = 'none';
    announcement.className = 'tab active';
    event.className = 'tab';
})
event.addEventListener('click', function () {
    reqAnnouncement.style.display = 'none';
    reqEvent.style.display = 'block';
    announcement.className = 'tab';
    event.className = 'tab active';
})
//profile navagation code
