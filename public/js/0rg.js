function count_up(obj){
  document.getElementById('count1').innerHTML=obj.value.length;
  if(obj.value.length>=500){
    alert("You have reached the character limit.");
  }
}
const FIREBASE_STORAGE = firebase.storage();
var fileButton = document.getElementById('uploadFile');

fileButton.addEventListener('change', function(e){
  var file = e.target.files[0];
  var storageRef = firebase.storage().ref('/upload/' + file.name);
  var task = storageRef.put(file);
});
task.on('state_changed',
    function progress(snapshot) {
        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploader.value = percentage;
    },
    function error(err) {

    },
    function complete() {

    }
);
FIREBASE_STORAGE.ref('/upload/' + file.name).on('child_added', function (snapshot) {
    console.log(snapshot.val());
    preview = snapshot.val();
});
var W3CDOM = (document.createElement && document.getElementsByTagName);

function initFileUploads() {
	if (!W3CDOM) return;
	var fakeFileUpload = document.createElement('div');
	fakeFileUpload.className = 'fakefile';
	fakeFileUpload.appendChild(document.createElement('input'));
	var image = document.createElement('img');
	image.src='../appAssets/reqAttach.png';
	fakeFileUpload.appendChild(image);
	var x = document.getElementsByTagName('input');
	for (var i=0;i<x.length;i++) {
		if (x[i].type != 'file') continue;
		if (x[i].parentNode.className != 'requestSpace') continue;
		x[i].className = 'file hidden';
		var clone = fakeFileUpload.cloneNode(true);
		x[i].parentNode.appendChild(clone);
		x[i].relatedElement = clone.getElementsByTagName('input')[0];
		x[i].onchange = x[i].onmouseout = function () {
			this.relatedElement.value = this.value;
		}
	}
}
