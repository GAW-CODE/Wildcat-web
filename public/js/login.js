const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
btnSignUp.addEventListener('click', e => {
  window.location.href = "SignUp.html";
});

btnLogin.addEventListener('click', e => {
	const pass = txtPassword.value;
  const email = txtEmail.value;
	const auth = firebase.auth();
	const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.then(function(v){
    //if admin
    window.location.href = "admin.html";
    //else redirect to request.html (and eventually a separate interface for campus orgs / teachers)
  });
	promise.catch(e => console.log(e.message));
});
