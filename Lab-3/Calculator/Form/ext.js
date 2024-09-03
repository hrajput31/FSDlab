document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    let username = document.getElementById('user').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('Phone').value.trim();
    let password = document.getElementById('pass1').value.trim();
    let confirmPassword = document.getElementById('pass2').value.trim();
    
    let errorMessage = '';
    let isValid = true;

    // Check if all fields are filled
    if (!username || !email || !phone || !password || !confirmPassword) {
        errorMessage += 'All fields must be filled out.\n';
        isValid = false;
    }

    // Check if the phone number is 10 digits and numeric
    if (!/^\d{10}$/.test(phone)) {
        errorMessage += 'Phone number must be 10 digits and numeric only.\n';
        isValid = false;
    }

    // Check if the password meets the required criteria
    if (!validatePassword(password)) {
        errorMessage += 'Password must be at least 7 characters long and contain at least one capital letter, one digit, and one special character (&,$,#,@).\n';
        isValid = false;
    }

    // Check if the passwords match
    if (password !== confirmPassword) {
        errorMessage += 'Passwords do not match.\n';
        isValid = false;
    }

    // Display errors or success message
    if (!isValid) {
        displayError(errorMessage);
    } else {
        alert('Form submitted successfully!');
        // Here you can proceed with the form submission or other processing as needed
    }
});

// Function to validate the password
function validatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/;
    return regex.test(password);
}

if (!validateEmail(email)) {
    errorMessage += 'Email must contain "@" and a dot (.) character.\n';
    isValid = false;
}
// Function to validate the email
function validateEmail(email) {
    return email.includes('@') && email.includes('.');
}
// Function to display error messages
function displayError(message) {
    document.getElementById('error-message').innerText = message;
}
