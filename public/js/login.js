const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnForgot = document.getElementById('btnForgot');
const email = document.getElementById('email');
btnSignUp.addEventListener('click', e => {
  window.location.href = "SignUp.html";
});

btnLogin.addEventListener('click', e => {
  const PASS = txtPassword.value;
  const EMAIL = txtEmail.value;
  const FIREBASE_AUTH = firebase.auth();
  const PROMISE = FIREBASE_AUTH.signInWithEmailAndPassword(EMAIL, PASS)
    .then(function(user) {
        //First check the username and password
        //Second read the type from the user
        //Third move them to the webpage them need to go
      firebase.database().ref('/users/' + user.uid).once('value')
          .then((snapshot) => {
              console.log(snapshot.val().type);
              //student go to annouce
              //campus org, guidance, ASB, Athletics, Fundraiser  go to orginization
              //Admin go to admin
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
btnForgot.addEventListener('click', function () {
    firebase.auth().sendPasswordResetEmail(
        email.value)
        .then(function () {
            // Password reset email sent.
        })
        .catch(function (error) {
            // Error occurred. Inspect error.code.
        })
});