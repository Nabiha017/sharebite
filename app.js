// Authentication and Role Selection
document.addEventListener('DOMContentLoaded', () => {
    const roleBtns = document.querySelectorAll('.role-btn');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const signupToggle = document.getElementById('signup-toggle');
    const loginToggle = document.getElementById('login-toggle');
    const userRoleInput = document.getElementById('user-role');

    // Role Selection
    roleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            roleBtns.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            userRoleInput.value = btn.dataset.role;
            
            // Show signup form
            signupForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
        });
    });

    // Toggle between Login and Signup
    signupToggle.addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });

    loginToggle.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    });

    // Signup Form Submission
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            role: userRoleInput.value
        };

        // In a real app, this would be a backend API call
        localStorage.setItem('userData', JSON.stringify(userData));
        
        // Simulate successful signup and navigate to home
        navigateToHome();
    });

    // Login Form Submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // In a real app, this would be a backend authentication
        const storedUser = JSON.parse(localStorage.getItem('userData'));
        
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            navigateToHome();
        } else {
            alert('Invalid login credentials');
        }
    });

    // Logout functionality
    const logoutLink = document.getElementById('logout-link');
    if (logoutLink) {
        logoutLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Clear user data and return to auth page
            localStorage.removeItem('userData');
            navigateToAuthPage();
        });
    }
});

// Navigation Functions
function navigateToHome() {
    document.getElementById('auth').classList.remove('active');
    document.getElementById('home').classList.add('active');
}

function navigateToAuthPage() {
    document.getElementById('home').classList.remove('active');
    document.getElementById('auth').classList.add('active');
}

// Donation and Request Functions
function startDonation() {
    alert('Donation process for donors will be implemented');
}

function requestFood() {
    alert('Food request process for NGOs will be implemented');
}

// Existing navigation toggle and other previous functionalities remain the same
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    
    navLinks.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
}
// Any existing global variables or configurations (if any)

// DOMContentLoaded to ensure everything runs after the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Updated code for handling signup, login, and navigation
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");
    const loginToggle = document.getElementById("login-toggle");
    const signupToggle = document.getElementById("signup-toggle");
    const homePage = document.getElementById("home");
    const authPage = document.getElementById("auth");

    // Handle the "Sign Up" form submission
    signupForm.addEventListener("submit", (event) => {
        event.preventDefault();
        showHomePage(); // Redirect to Home Page
    });

    // Handle the "Log In" form submission
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        showHomePage(); // Redirect to Home Page
    });

    // Toggle between Sign Up and Log In forms
    loginToggle.addEventListener("click", (event) => {
        event.preventDefault();
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });

    signupToggle.addEventListener("click", (event) => {
        event.preventDefault();
        loginForm.classList.add("hidden");
        signupForm.classList.remove("hidden");
    });

    // Function to show the Home Page
    function showHomePage() {
        authPage.classList.add("hidden");
        homePage.classList.remove("hidden");
    }
});

// Additional functions for navigation or other app logic can go here
// Toggle Hamburger Menu
function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("hidden");
}

// Start Donation Function
function startDonation() {
    alert("Redirecting to donation page...");
    // Add logic to navigate to the donation page
}

// Request Food Function
function requestFood() {
    alert("Redirecting to request food page...");
    // Add logic to navigate to the request page
}
