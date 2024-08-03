console.log("Event Bubbling, Capturin aka ");

/**
 * Event Bubbling
 * 
 * - Bubbling always moves outward.
 * - If you click on a child element, it will be handled first.
 * - Then the event will move upward to the higher hierarchy.
 * - It goes up to the end of the DOM.
 * - The order is: child > parent > grandparent.
 * - Bubbling always moves outward.
 * - Opposite to event capturing.
 */

/**
 * Event Capturing
 * 
 * - Directly opposite to event bubbling.
 * - It is downward traversal in the DOM tree.
 * - If you click on a child element:
 *   - First, the grandparent handles the event.
 *   - Then, the parent handles it.
 *   - Finally, the child handles it.
 * - Event capturing is also known as event trickling.
 * - Some people use the term "trickling" because events trickle down and then bubble up.
 */

/**
 * W3C has come up with Event Capturing and Bubbling.
 * Both are accepted.
 * It is now up to the developer how they use it. W3C has made this
 * very much comfortable.
 * 
 * They give us comfort to choose what we want. Whatever we want to do,
 * we can decide it.
 */

// How to code like this:

// We can pass the argument as a boolean to use the capture flag.
// How to do that:
/**
 addEventListener('click', () => {
    // Handling the event
}, useCapture);
 */


/**
 * Generally, useCapture is passed as a true or false value.
 * So, on the basis of true or false,
 * the browser decides whether to use capturing or bubbling.
 * When the flag is true, event capturing mode is enabled.
 * This means the event trickles down in the DOM hierarchy.
 * In the other case, if you don't pass any attribute or pass
 * a false value, the event will bubble up.
 * It will go up the hierarchy of the DOM.
 * That is how you can configure your code to use either event
 * bubbling or event capturing in whatever way you want.
 * 
 * One important thing to note here is:
 * 
 * In the W3C model, the cycle will continue anyway.
 * What will happen is, if you have a click event, the cycle will continue.
 * Events will trickle down and bubble up.
 * 
 * By using useCapture, you can control whether to capture or bubble out.
 */





//------ Practical Explanation ------------

document.querySelector("#grandparent")
.addEventListener('click', () => {
    console.log("Grandparent Clicked....!");
});

document.querySelector("#parent")
.addEventListener('click', () => {
    console.log("Parent Clicked....!");
});

document.querySelector("#child")
.addEventListener('click', () => {
    console.log("Child Clicked....!");
});

/**
 * Now the result will be:
 * - Child is clicked
 * - Parent is clicked
 * - Grandparent is clicked
 * 
 * This is because event bubbling is used by default.
 * If we don't pass any argument inside the event listener function,
 * it defaults to false, meaning bubbling will occur.
 * 
 * It is the same as explicitly passing false:
 * 
document.querySelector("#grandparent")
.addEventListener('click', () => {
    console.log("Grandparent Clicked....!");
}, false);
 

document.querySelector("#parent")
.addEventListener('click', () => {
    console.log("Parent Clicked....!");
}, false);

document.querySelector("#child")
.addEventListener('click', () => {
    console.log("Child Clicked....!");
}, false);
 * 
 */

/**
 * If we pass true:
 * 
 * - Grandparent Clicked....!
 * - Parent Clicked....!
 * - Child Clicked....!
 * 
 * This is called event capturing or trickling.
 * 
document.querySelector("#grandparent")
.addEventListener('click', () => {
    console.log("Grandparent Clicked....!");
}, true);
 

document.querySelector("#parent")
.addEventListener('click', () => {
    console.log("Parent Clicked....!");
}, true);

document.querySelector("#child")
.addEventListener('click', () => {
    console.log("Child Clicked....!");
}, true);
 * 
 */

// But this has performance issues. How to solve this?

//-----Stop Propagation-----

/**
 * Stop propagation 
 * stopPropagation is a method that prevents an event from continuing
 * to travel through the event flow (capturing and bubbling phases). 
 * 
 */


document.querySelector("#grandparent")
.addEventListener('click', (e) => {
    console.log("Grandparent Clicked....!");
    e.stopPropagation();
}, false);
 

document.querySelector("#parent")
.addEventListener('click', (e) => {
    console.log("Parent Clicked....!");
    e.stopImmediatePropagation();
}, false);

document.querySelector("#child")
.addEventListener('click', (e) => {
    console.log("Child Clicked....!");
    e.stopPropagation();
}, false);



























/**
 * Now if  i click the chiled or parent div
 * everthough it will print the output 
 * 
 */





