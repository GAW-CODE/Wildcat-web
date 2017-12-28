var config = {
    apiKey: "AIzaSyAOCBR_8j5Uf59kPrJeNKmyhm5kkdVUJWo",
    authDomain: "gaw-wildcat-app.firebaseapp.com",
    databaseURL: "https://gaw-wildcat-app.firebaseio.com",
    projectId: "gaw-wildcat-app",
    storageBucket: "gaw-wildcat-app.appspot.com",
    messagingSenderId: "467203906935"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  const txtEmail = document.getElementById("txtEmail");
  const txtPassword = document.getElementById("txtPassword");
  const txtOrganization = document.getElementById("txtOrganization");
  const txtName = document.getElementById("txtName");
  const txtReenterPassword = document.getElementById("txtReenterPassword");
  const btnSignUp = document.getElementById("SignUp");
  const txtType = document.getElementById("Organization Type:");

  btnSignUp.addEventListener('click', e => {
    const reenterpass = txtReenterPassword.value;	
  	const email = txtEmail.value;
  	const pass = txtPassword.value;
  	const userObj = {
  		name: txtName.value,
  		type: txtType.value,
  		organization: txtOrganization.value
  	};
  	if(reenterpass == pass){
  	const auth = firebase.auth();
  	const promise = auth.createUserWithEmailAndPassword(email, pass).then(function(user){
  		database.ref('users/' + user.uid).set(userObj).then(
            function() {
                console.log('User data successfully stored')
            }).catch(function(error) {
                console.log(error);
            });
            
  	});
  	promise.catch(e => console.log(e.message));
  	promise.then(function(v){
      window.location.href = "login.html";
    });
  }
  else{
  	alert("Passwords don't match");
  }
  });