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

console.log(dateButton);
console.log(dateInputBlock);
console.log(sendButton);
console.log(announceTitle);
console.log(announceMessage);

dateButton.addEventListener('click', function(){
	if(dateInputBlock.className == 'hide'){
		dateInputBlock.className = 'show';
	}
	else{
		dateInputBlock.className = 'hide';
	}
});

sendButton.addEventListener('click', function(){

});