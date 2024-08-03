console.log("Event Delegation");
 
/**
 * Event bubbling is based upon event delegation 
 * because event bubbling exists because event delegation also exists.
 * 
 * Generally, in our web application development, 
 * we have many cases where we need to add events to our web page. 
 * We need to handle those events such as click events, input field key up, and key down events, 
 * along with many other random events as our application grows. 
 * The number of events keeps increasing.
 * 
 * As our web page keeps updating, these event handlers accumulate. 
 * At some point, we end up with many event handlers hanging around, 
 * which is a critical performance bottleneck.
 * 
 * We should absolutely avoid this. 
 * That is why we use event delegation.
 * 
 * Event delegation provides us with a very awesome technique for handling these events. 
 * By using event delegation, we don't have event handlers hanging around our web page 
 * causing a bottleneck.
 */


/**
 * Event delegation says that 
 * instead of attaching events to each and every 
 * child element or the individual elements,
 * we should rather attach the event directly to the parent of these elements.
 * 
 * Suppose we had a parent element with some id "category".
 * 
 * Instead of individually attaching events to the children,
 * we can attach a single event listener to the parent div with id "category".
 * 
 * When a child is clicked, the event will bubble up to its parent,
 * and the event listener attached to the parent will be called.
 * The callback will be executed.
 * 
 * This approach works because of the concept of event bubbling.
 * Instead of having multiple event handlers, we have a single event handler.
 * 
 * Due to event bubbling, events are propagated up the DOM hierarchy,
 * and the parent element is able to listen to all the events happening inside its 
 * child elements.
 * 
 * This is the concept of event delegation. It is possible 
 * because event bubbling is a feature in JavaScript.
 * 
 * Theoretically, this is what event delegation looks like.
 */



// document.querySelector('#category')
// .addEventListener('click', (e) => {
//     console.log("category event is clicked");
// })

/*
 * We can use this to check which LI item is clicked 
 * A good way to check this is by using the e event object which we receive 
 * by using this callback method 
 * 
 * 
 *
 */

// document.querySelector('#category')
// .addEventListener('click', function(e){
//     // accessing the e object 

//     // console.log(e)//
//     // console.log(e.target);//
//     console.log(e.target.id);

//     //---Redirecting the page 
//     window.location.href = "/" + e.target.id;

// })

// So this is what happens: the event is being bubbled up to the 
// parent of this LI element because a single event handler is 
// being attached. It's listening to each and every child, even inside the child 

// So it checks for the e event 

/**
 * But we have an issue over here  
 * We should not directly redirect someone to any location 
 * directly like this. What I am trying to say is if we had more tabs in our UL inside the main div
 * or suppose we had some nested different elements, like apart from LI we had different things,
 * if we click on those elements as well, the event will bubble up and 
 * the same callback method will be called, and the user will be redirected to
 * a random URL.
 * 
 * What we can do is we will keep a check and then we will redirect to the specific page 
 * when the e.target is actually an LI element or specified element 
 * 
 * so we can keep the check of the 
 */

document.querySelector('#category')
.addEventListener('click', function(e){

    console.log(e.target.id);

    if (e.target.tagName === 'LI') {
        window.location.href = "/" + e.target.id;
    }
})

//----Another Example------

/**
 * 
 * 
 */
