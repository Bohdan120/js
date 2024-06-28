const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => togglePanel(true));
signInButton.addEventListener('click', () => togglePanel(false));

function togglePanel(isSignUp) {
    container.classList.toggle("right-panel-active", isSignUp);
}


const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');

signInForm.onsubmit = function (event) {
    event.preventDefault();
    const signInEmailInput = document.getElementById('signInEmailInput');
    const signInPasswordInput = document.getElementById('signInPasswordInput');
    const signInMessage = document.getElementById('signInMessage');
    validateSignIn(signInEmailInput.value, signInPasswordInput.value, signInMessage);
};

signUpForm.onsubmit = function (event) {
    event.preventDefault();
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const repeatPasswordInput = document.getElementById('repeatPasswordInput');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const repeatPasswordError = document.getElementById('repeatPasswordError');
    validateSignUp(emailInput.value, passwordInput.value, repeatPasswordInput.value, emailError, passwordError, repeatPasswordError);
};

function validateSignIn(email, password, signInMessage) {
    const authenticatedUser = authenticateUser(email, password);
    signInMessage.textContent = authenticatedUser ? 'Successfully logged in!' : 'Invalid email or password';
}

function validateSignUp(email, password, repeatPassword, emailError, passwordError, repeatPasswordError) {
    clearPreviousMessages(emailError, passwordError, repeatPasswordError);

    const users = getUsersFromCookie();

    if (!isValidEmail(email)) {
        emailError.textContent = 'Invalid email address';
    } else if (!isValidPassword(password)) {
        passwordError.textContent = 'Invalid password';
    } else if (password !== repeatPassword) {
        repeatPasswordError.textContent = 'Passwords do not match';
    } else if (users[email]) {
        emailError.textContent = 'User with this email already exists';
    } else {          
        saveUserToCookie(email, password);       
        repeatPasswordError.textContent = 'Registration successful!';
    }
}

function clearPreviousMessages(...elements) {
    elements.forEach(element => element.textContent = '');
}

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return passwordRegex.test(password);
}

function saveUserToCookie(email, password) {
    const users = getUsersFromCookie();
    users[email] = { password: password };
    saveDataToCookie('users', JSON.stringify(users));
}

function getUsersFromCookie() {
    const usersCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('users='));
    return usersCookie ? JSON.parse(usersCookie.split('=')[1]) : {};
}

function authenticateUser(email, password) {
    const users = getUsersFromCookie();

    if (users[email] && users[email].password === password) {
        return true;
    } else {
        console.log('Debug: Users in cookie:', users);
        console.log('Debug: Input email and password:', email, password);
        return false;
    }
}

function saveDataToCookie(key, value) {
    document.cookie = `${key}=${value}; path=/`;
}
