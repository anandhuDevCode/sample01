// Wait until the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggleButton = document.getElementById('toggleButton');

    // Get the saved mode from local storage, or default to light mode
    const savedMode = localStorage.getItem('theme') || 'light-mode';

    // Apply the saved mode to the body
    body.classList.add(savedMode);

    // Set the button text based on the current mode
    toggleButton.textContent = savedMode === 'light-mode' ? 'Switch to Dark Mode' : 'Switch to Light Mode';

    // Add a click event listener to the button
    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            // If in light mode, switch to dark mode
            body.classList.replace('light-mode', 'dark-mode');
            toggleButton.textContent = 'Switch to Light Mode';
            // Save the current mode in local storage
            localStorage.setItem('theme', 'dark-mode');
        } else {
            // If in dark mode, switch to light mode
            body.classList.replace('dark-mode', 'light-mode');
            toggleButton.textContent = 'Switch to Dark Mode';
            // Save the current mode in local storage
            localStorage.setItem('theme', 'light-mode');
        }
    });
});
