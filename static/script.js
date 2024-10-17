document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    // Here you can add authentication logic if needed

    // Redirect to the dashboard
    window.location.href = '/dashboard';
});