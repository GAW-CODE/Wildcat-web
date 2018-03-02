
//DOM for forgetting password
let forgot = document.getElementById('btnForgot');
let reset = document.getElementById('reset');

forgot.addEventListener('click', function(){
    reset.classList.toggle('show');
})