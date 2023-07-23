const username = document.getElementById('username');
const password = document.getElementById('login-form');
const usernameErr = document.getElementById('usernameError');

username.addEventListener('input', (e) => {
    let pattern = /^[\w]{6,10}$/;
    let currValue = e.target.value;
    let check = pattern.test(currValue);
    if (check) {
        usernameErr.style.display = 'none';
    }
    else {
        usernameErr.style.display = 'block';
    }
    // console.log(pattern.test(currValue));
});