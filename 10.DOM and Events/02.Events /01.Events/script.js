// Select the first button with the id 'btn1'
let btn1 = document.querySelector("#btn1");


// Attach an onclick event listener to btn1
btn1.onclick = () => console.log("button clicked");

// Select the first div element
let div = document.querySelector("div");

// Attach an onmouseover event listener to the div
div.onmouseover = () => {
    console.log("you are here now>>>.!!!!!");
}

/*
 * Note:
 * - If you handle events through inline HTML attributes,
 *   the priority goes to JS handling.
 * - If you handle events through JavaScript, 
 *   you can't handle the same event again on the same element
 *   without overriding the first handler.
 */




//____Event Object______

// Select the button element with the id 'btn2'
let btn2 = document.querySelector("#btn2");

// Event handler for button click
btn2.onclick = (event) => {
    // Log the entire event object
    console.log(event);
    
    // Log the type of the event (e.g., "click")
    console.log(event.type);
    
    // Log the HTML element that triggered the event
    console.log(event.target); // Outputs: the HTML element that was clicked
    
    // Log the element to which the event handler is bound
    console.log(event.currentTarget); // Outputs: the element the event handler is bound to
    
    // Log the X and Y coordinates of the mouse pointer relative to the viewport
    console.log(event.clientX, event.clientY);
}

// Select the box element with the id 'box2'
let box2 = document.querySelector("#box2");

// Event handler for mouseover event on the box
box2.onmouseover = (event) => {
    // Log the entire event object
    console.log(event);
    
    // Log the type of the event (e.g., "mouseover")
    console.log(event.type);
    
    // Log the HTML element that triggered the event
    console.log(event.target); // Outputs: the HTML element that was hovered over
    
    // Log the element to which the event handler is bound
    console.log(event.currentTarget); // Outputs: the element the event handler is bound to
    
    // Log the X and Y coordinates of the mouse pointer relative to the viewport
    console.log(event.clientX, event.clientY);
}

/**
 * - This code demonstrates how to handle events using the Event object.
 * - It logs various properties of the Event object, including the type of event,
 *   the target element, the current target element, and the mouse coordinates.
 */





//____Event Listeners___

//*******Example with addEventListener******

/**
 * addEventListener is a function that attaches an event handler to an element.
 * It always listens for events and when an event occurs, it executes the specified handler.
 */

// Select the button element with the id 'btn3'
let btn3 = document.querySelector('#btn3');

// Add multiple event listeners to the button 'btn3'
btn3.addEventListener('click', () => {
    console.log("button3 is addEventListener Clicked");
});

btn3.addEventListener('click', () => {
    console.log("button3");
});

btn3.addEventListener('click', (evt) => {
    console.log("button3 is clicked");
    console.log(evt);
    console.log(evt.type);
});

/**
 * Through this method, we can handle multiple events on the same element.
 */

//*******Example with addEventListener for another button******

// Select the button element with the id 'btn1'
let btn1 = document.querySelector('#btn1');

// Add multiple event listeners to the button 'btn1'
btn1.addEventListener("click", () => {
    console.log("button1 was clicked-handler_1");
});

btn1.addEventListener("click", () => {
    console.log("button1 was clicked-handler_2");
});

// Define a separate handler function
const handler3 = () => console.log("button1 was clicked-handler_3");

// Add the handler3 function as an event listener
btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () => {
    console.log("button1 was clicked-handler_4");
});

// Remove the handler3 function from the event listeners
btn1.removeEventListener("click", handler3);


// Note: The callback reference should be the same to remove an event listener


