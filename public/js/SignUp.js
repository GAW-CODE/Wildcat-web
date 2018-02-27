const FIREBASE_DATABASE = firebase.database();
const FIREBASE_AUTH = firebase.auth();

const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const txtOrganization = document.getElementById("txtOrganization");
const txtName = document.getElementById("txtName");
const txtReenterPassword = document.getElementById("txtReenterPassword");
const btnSignUp = document.getElementById("SignUp");
const txtType = document.getElementById("Organization");

btnSignUp.addEventListener('click', e => {
  const reenterpass = txtReenterPassword.value;
	const email = txtEmail.value;
	const pass = txtPassword.value;
	const userObj = {
		name: txtName.value,
		type: txtType.value,
		organization: txtOrganization.value
	};
	if (reenterpass == pass) {
  const promise = FIREBASE_AUTH.createUserWithEmailAndPassword(email, pass).then(function(user) {
  	FIREBASE_DATABASE.ref('users/' + user.uid).set(userObj).then(
          function() {
              console.log('User data successfully stored')
          }).catch(function(error) {
              console.log(error);
          });
  	});
  	promise.catch(e => alert(e.message));
  	promise.then(function(v) {
      window.location.href = "login.html";
    });
  }
  else{
  	alert("Passwords don't match");
  }
  });
