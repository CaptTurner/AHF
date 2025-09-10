// Theme Toggle Functionality with Persistent Theme Across Pages
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Function to apply theme from localStorage
function applySavedTheme() {
    // Retrieve saved theme from localStorage, default to 'light' if none exists
    const savedTheme = localStorage.getItem('theme') || 'light';
    console.log('Applying saved theme:', savedTheme);

    // Apply the theme to the HTML element
    html.setAttribute('data-theme', savedTheme);

    // Update button text to match the applied theme
    updateButtonText();

    return savedTheme;
}

// Function to update button text based on current theme
function updateButtonText() {
    const currentTheme = html.getAttribute('data-theme');
    const buttonText = currentTheme === 'light' ? 'Found Mode' : 'Lost Mode';
    if (themeToggle) {
        themeToggle.textContent = buttonText;
    }
}

// Function to handle theme toggle
function handleThemeToggle() {
    // Get current theme from the HTML data attribute
    const currentTheme = html.getAttribute('data-theme');

    // Determine the new theme (opposite of current)
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Apply the new theme
    html.setAttribute('data-theme', newTheme);

    // Save the new theme to localStorage for persistence across pages
    localStorage.setItem('theme', newTheme);

    // Update button text to reflect the change
    updateButtonText();

    console.log('Theme toggled to:', newTheme);
}

// Apply saved theme when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Apply the saved theme and update UI
    applySavedTheme();

    // Add click event listener to the theme toggle button
    if (themeToggle) {
        themeToggle.addEventListener('click', handleThemeToggle);
    }
});

// Removed updateButtonText as button now has no text

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Newsletter Form Handling (Basic)
const newsletterForm = document.querySelector('.newsletter form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with ${email}! We'll keep you updated.`);
        this.reset();
    });
}

// Placeholder for future interactivity
// Add more features like music player controls, event calendar, etc.
