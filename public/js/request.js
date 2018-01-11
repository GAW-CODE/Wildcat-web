/*
const calendarEvent = document.getElementById('calendarEvent');

calendarEvent.addEventListener('click', e => {
	window.location.href = "calendarRequest.html";
});
*/




//interface js goes below
var dateButton = document.getElementById('calendarEvent');
var dateInputBlock = document.getElementById('date');
var sendButton = document.getElementById('send');
var announceTitle = document.getElementById('txtName');
var announceMessage = document.getElementById('message');

dateButton.addEventListener('click', function(){
	if(dateInputBlock.className == 'hide'){
		dateInputBlock.className = 'show';
	}
	else{
		dateInputBlock.className = 'hide';
	}
});

sendButton.addEventListener('click', function(){
	if(announceTitle.value == ""){
		alert("You must include a title");
	}
	if(announceMessage.value == ""){
		alert("You must include a message");
	}
});

var charCount = document.getElementById("chars");
message.addEventListener('change', function(e){
	charCount.innerHTML=e.target.value.length;
});