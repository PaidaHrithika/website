document.addEventListener("DOMContentLoaded", function() {
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");

    forgotPasswordForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;

        // Here you would typically send an AJAX request to the server to verify the email
        // For demonstration purposes, let's assume the email is valid and redirect to the reset password page
        window.location.href = "reset_password.html";
    });
});
