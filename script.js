document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent actual form submission
        // Get and trim input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        let isValid = true;
        const messages = [];
        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }
        // Email validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }
        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }
        // Display feedback
        feedbackDiv.style.display = 'block';
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Green color
            feedbackDiv.style.backgroundColor = '#d4edda'; // Light green background
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#d8000c'; // Red text
            feedbackDiv.style.backgroundColor = '#ffbaba'; // Light red background
        }
    });
});
