
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const email = document.getElementById('email');
const btnSend = document.getElementById('send')
let forgot = document.getElementById('btnForgot');
let reset = document.getElementById('reset');
const back = document.getElementById('back');
document.getElementById('wrong').style.display= "none";
btnSignUp.addEventListener('click', e => {
    window.location.href = "SignUp.html";
});

btnLogin.addEventListener('click', e => {
    const PASS = txtPassword.value;
    const EMAIL = txtEmail.value;
    const FIREBASE_AUTH = firebase.auth();
    const PROMISE = FIREBASE_AUTH.signInWithEmailAndPassword(EMAIL, PASS)
        .then(function (user) {
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
                    document.getElementById("wrong").style.display = "none";
                });
        }).catch(e => {
            console.log(e.message);

            document.getElementById('wrong').style.display = "block";
        });;
});
// take email from #email to send password reset request
btnSend.addEventListener('click', function () {
    firebase.auth().sendPasswordResetEmail(
        email.value)
        .then(function () {
            // Password reset email sent.
        })
        .catch(function (error) {
            // Error occurred. Inspect error.code.
        })
});
//DOM for forgetting password

forgot.addEventListener('click', function () {
    reset.style.display= "block" ;
    loginpg.style.display = "none";
})

back.addEventListener('click', function () {
    reset.style.display = "none";
    loginpg.style.display = "block";
})
