const uname = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const message = document.getElementById('iq');
const form = document.getElementById('form');

const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const phone_error = document.getElementById('phone_error');
const sub_error = document.getElementById('sub_error');
const iq_error = document.getElementById('iq_error');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Clear previous error messages
    name_error.innerHTML = "";
    email_error.innerHTML = "";
    phone_error.innerHTML = "";
    sub_error.innerHTML = "";
    iq_error.innerHTML = "";

    let valid = true;

    const email_check = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}$/;
    const phoneno = /^\d{10}$/;

    // Name validation
    if (uname.value === '' || uname.value == null) {
        name_error.innerHTML = "*Name is required";
        valid = false;
    }

    // Email validation
    if (!email.value.match(email_check)) {
        email_error.innerHTML = "*Valid email is required";
        valid = false;
    }

    // Phone validation
    if (!phone.value.match(phoneno)) {
        phone_error.innerHTML = "*Valid phone no. is required";
        valid = false;
    }

    // Subject validation
    if (subject.value === '' || subject.value == null) {
        sub_error.innerHTML = "*Subject is required";
        valid = false;
    }

    // Message validation
    if (message.value === '' || message.value == null) {
        iq_error.innerHTML = "*Message is required";
        valid = false;
    }

    // If all validations pass, submit the form
    if (valid) {
        form.submit(); // Submit the form programmatically
    }
});
