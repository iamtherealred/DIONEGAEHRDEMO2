// script.js

// Function to update date and time
to updateDateTime() {
    const now = new Date();
    document.getElementById('datetime').innerText = `Current Date and Time: ${now.toLocaleString()}`;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Age Calculation
document.getElementById('birthdate')?.addEventListener('change', function() {
    const birthDate = new Date(this.value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById('age').value = age;
});

// Admin Authentication
const adminCredentials = { username: 'Admin2005', password: '239210183' };
const users = [adminCredentials];

document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        sessionStorage.setItem('loggedInUser', username);
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials!');
    }
});

// Logout Functionality
document.getElementById('logout')?.addEventListener('click', function() {
    sessionStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
});

// Ensure only admin accesses admin panel
document.addEventListener("DOMContentLoaded", function() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser !== adminCredentials.username && window.location.pathname.includes("admin.html")) {
        alert("Unauthorized Access");
        window.location.href = "index.html";
    }
});
