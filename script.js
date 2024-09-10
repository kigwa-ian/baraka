document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simple validation (hardcoded username and password)
    if (username === 'parent' && password === 'control123') {
        alert('Login successful!');
        window.location.href = '#';  // Redirect if needed
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});
