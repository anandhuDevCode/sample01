console.log("DOM part two");

// ___Attributes____

// Selecting a <div> element
let div = document.querySelector("div");

// Getting the 'id' attribute of the <div> element
let id = div.getAttribute("id");
console.log(id); 
// Output: box

// Getting the 'name' attribute of the <div> element
let name = div.getAttribute("name");
console.log(name); 
// Output: JSDiv

// Selecting a <p> element
let para = document.querySelector("p");

// Getting the 'class' attribute of the <p> element
console.log(para.getAttribute("class")); 
// Output: para

// Setting a new 'class' attribute to the <p> element
let para2 = document.querySelector("p");
para2.setAttribute("class", "newClass");
console.log(para2.getAttribute("class")); 
// Output: newClass

// Example: Style attribute
let div3 = document.querySelector("div");

// Setting background color to yellow (overridden by purple in the next line)
div3.style.backgroundColor = "yellow";

// Overriding the background color with purple
div3.style.backgroundColor = "purple";

// Setting the font size
div3.style.fontSize = "26px";
