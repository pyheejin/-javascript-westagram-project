const loginButton = document.getElementById('login');

const name = document.getElementById('name');
const pwd = document.getElementById('pwd');

name.addEventListener('keypress', function () {
    if (pwd.value.length >= 1) {
        loginButton.style.backgroundColor='#2d89f3';
    }
})

pwd.addEventListener('keypress', function () {
    if (name.value.length >= 1) {
        loginButton.style.backgroundColor='#2d89f3';
    }
})