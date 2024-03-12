document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorContainer = document.getElementById('errorContainer');
    var isValid = true;

    // Clear previous errors
    errorContainer.innerHTML = '';

    // Validate name
    if (name.trim() === '') {
        displayError('Name is required');
        isValid = false;
    }

    // Validate email
    if (email.trim() === '') {
        displayError('Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        displayError('Invalid email address');
        isValid = false;
    }

    // Validate password
    if (password.trim() === '') {
        displayError('Password is required');
        isValid = false;
    }

    // If form is valid, submit
    if (isValid) {
        event.target.submit();
    }
});

function isValidEmail(email) {
    // Basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function displayError(message) {
    var errorContainer = document.getElementById('errorContainer');
    var errorElement = document.createElement('div');
    errorElement.className = 'error';
    errorElement.textContent = message;
    errorContainer.appendChild(errorElement);
}
