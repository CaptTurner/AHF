// Theme Toggle Functionality with Firefox Compatibility and No Flash
let themeToggle = null;
const html = document.documentElement;

// Function to safely access localStorage
function getStoredTheme() {
    try {
        return localStorage.getItem('theme') || 'light';
    } catch (e) {
        console.warn('localStorage not available:', e);
        return 'light';
    }
}

// Apply theme immediately to prevent flash of wrong theme
(function applyThemeImmediately() {
    const savedTheme = getStoredTheme();
    if (savedTheme === 'dark') {
        html.setAttribute('data-theme', 'dark');
    }
    // For light theme, we don't need to set anything as it's the default
    // CSS will handle the toggle position automatically
})();

// Function to safely set localStorage
function setStoredTheme(theme) {
    try {
        localStorage.setItem('theme', theme);
    } catch (e) {
        console.warn('Could not save theme to localStorage:', e);
    }
}

// Function to apply theme from localStorage
function applySavedTheme() {
    // Retrieve saved theme from localStorage, default to 'light' if none exists
    const savedTheme = getStoredTheme();
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

    // Find the button element if not already found
    if (!themeToggle) {
        themeToggle = document.getElementById('theme-toggle');
    }

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
    setStoredTheme(newTheme);

    // Update button text to reflect the change
    updateButtonText();

    console.log('Theme toggled to:', newTheme);
}

// Function to initialize theme functionality
function initializeThemeToggle() {
    // Find the theme toggle button
    themeToggle = document.getElementById('theme-toggle');

    if (themeToggle) {
        // Apply saved theme and update UI
        applySavedTheme();

        // Add click event listener to the theme toggle button
        themeToggle.addEventListener('click', handleThemeToggle);

        // Mark theme as loaded to re-enable CSS transitions
        html.setAttribute('data-theme-loaded', 'true');

        console.log('Theme toggle initialized successfully');
    } else {
        console.warn('Theme toggle button not found, retrying...');
        // Retry after a short delay if button not found
        setTimeout(initializeThemeToggle, 100);
    }
}

// Initialize when DOM is ready - multiple event listeners for cross-browser compatibility
function initializeOnDomReady() {
    if (document.readyState === 'loading') {
        // DOM not ready yet, wait for events
        document.addEventListener('DOMContentLoaded', initializeThemeToggle);
        window.addEventListener('load', initializeThemeToggle);
    } else {
        // DOM already ready
        initializeThemeToggle();
    }
}

// Start initialization
initializeOnDomReady();

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
