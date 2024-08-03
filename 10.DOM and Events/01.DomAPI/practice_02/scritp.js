console.log("Practice_set_two");

/**
 * 1. Create a new button element. Give it a text "Click me",
 * background color of red & text color of white.
 * Insert the button as the first element inside the body tag.
 */

let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

document.querySelector("body").prepend(newBtn);

/**
 * 2. Create a <p> tag in HTML, give it a class & some styling.
 * Now create a new class in CSS and try to append this 
 * class to the <p> element.
 * 
 * Did you notice how you overwrite the class name when you
 * add a new one?
 * Solve this problem using classList...
 */

let p = document.querySelector("p");

// Initially setting the class attribute (this will overwrite any existing class)
p.setAttribute("class", "initialClass");

// To avoid overwriting the existing class, use classList to add the new class
p.classList.add("newClass");
