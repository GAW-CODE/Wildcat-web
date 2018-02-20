const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnForgot = document.getElementById('btnForgot');
btnSignUp.addEventListener('click', e => {
  window.location.href = "SignUp.html";
});

btnLogin.addEventListener('click', e => {
  const PASS = txtPassword.value;
  const EMAIL = txtEmail.value;
  const FIREBASE_AUTH = firebase.auth();
  const PROMISE = FIREBASE_AUTH.signInWithEmailAndPassword(EMAIL, PASS);
  const UID = FIREBASE_AUTH.currentUser.uid;
    //First check the username and password
    //Second read the type from the user
    //Third move them to the webpage them need to go
  PROMISE.catch(e => {
      console.log(e.message);
      document.getElementById('wrong').style.display = "block";
      document.getElementById('btnForgot').style.display = "block";
  });
  

  firebase.database().ref('/users/' + UID).once('value')
      .then((snapshot) => {
          console.log(snapshot.val().type);
          //student go to annouce
          //campus org, guidance, ASB, Athletics, Fundraiser  go to orginization
          //Admin go to admin
          
          PROMISE.then(function (v) {
              if (snapshot.val().type == 'Student') {
                  window.location.href = 'announce.html'
              } else if (snapshot.val().type == 'Admin') {
                  window.location.href = 'admin.html'
              } else {
                  window.location.href = 'organization.html'
              }
          });
      });
});
    // take email from #email to send password reset request
sendPasswordResetEmail(email, actionCodeSettings)

