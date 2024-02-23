document.addEventListener("DOMContentLoaded", function() {
    const resetPasswordForm = document.getElementById("resetPasswordForm");

    resetPasswordForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const newPassword = document.getElementById("newPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (newPassword !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        // Here you can implement the logic to submit the new password to the server
        // For demonstration purposes, let's log the new password to the console
        console.log("New Password:", newPassword);

        // Clear the form after submission
        resetPasswordForm.reset();

        // Optionally, you can redirect the user to the login page after resetting the password
        alert("Password reset successfull!!!");
        window.location.href = "login.html";
        
    });

});
