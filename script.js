document.getElementById("resetForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const resetEmail = document.getElementById("resetEmail").value;

    if (!resetEmail) {
        alert("Please enter your email address.");
    } else {
        alert("A password reset link has been sent to your email.");
    }
});
