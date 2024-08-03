// Log a message to the console for practice
console.log("Practice");

/**
 * Qs.Create a toggle button that changes the screen to dark-mode when
 * clicked & light-mode when clicked again.
 */

// Select the mode toggle button and the body element
let modeBtn = document.querySelector('#mode');
let body = document.querySelector('body');

// Set the initial mode to light
let currMode = "light";

// Add an event listener to the button to handle clicks
modeBtn.addEventListener('click', () => {
    changeMode();
});

// Function to toggle between light and dark modes
function changeMode() {
    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    // Log the current mode to the console
    console.log(currMode);
}
