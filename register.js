document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        // Retrieve registered users' data from local storage
        const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

        // Check if the email is already registered
        const isEmailRegistered = registeredUsers.some(user => user.email === email);

        if (isEmailRegistered) {
            alert("This email is already registered. Please use a different email.");
            return;
        }

        // Register the user
        const newUser = { username, email, password };
        registeredUsers.push(newUser);
        localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

        // Registration successful
        alert("Registration Successful!");
        // Redirect to login page
        window.location.href = "login.html";
    });
});
