document.getElementById('validationForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorContainer = document.getElementById('errorContainer');
    var isValid = true;
  
    errorContainer.innerHTML = ''; // Clear previous errors
  
    if (name.trim() === '') {
      displayError('Name is required');
      isValid = false;
    }
  
    if (email.trim() === '') {
      displayError('Email is required');
      isValid = false;
    } else if (!isValidEmail(email)) {
      displayError('Invalid email address');
      isValid = false;
    }
  
    if (password.trim() === '') {
      displayError('Password is required');
      isValid = false;
    }
  
    if (!isValid) {
      event.preventDefault(); // Prevent form submission if validation fails
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
  