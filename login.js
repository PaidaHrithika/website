document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Retrieve registered users' data from local storage
        const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

        // Find the user with the provided email
        const user = registeredUsers.find(user => user.email === email);

        if (user) {
            if (user.password === password) {
                // Correct email and password
                alert("Redirecting to products catalog page....!!!");
                // Redirect to products catalog page
                window.location.href = "product.html"; // Change the URL to your products catalog page
            } else {
                // Incorrect password
                alert("Incorrect password. Please try again.");
            }
        } else {
            // User not registered
            alert("This email is not registered. Please register first.");
        }
    });
});
