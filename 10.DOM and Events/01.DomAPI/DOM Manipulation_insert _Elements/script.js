console.log("    <h1>DOM_Manipulation_Insert_Elements</h1>")


//How to add new thing in Html using DOM 

/**
 * It has two steps 
 * 
 * 1.Create Element :- let el = documentcreateElement("tage_name");
 * 
 * 2.Add Element :-
 */



//------Example : crating a button-----

let newBtn = document.createElement("button");

//adding name 
newBtn.innerText = "Click me!"
console.log(newBtn);//Output : Click me!


/**
 * How to show the button on the screen?
 * 
 * We have to add the button to the tree-like model in the DOM.
 * 
 * How to add?
 * 
 * For that, we have four important methods:
 * node.append(el)    // adds at the end of the node (inside)
 * node.prepend(el)   // adds at the start of the node (inside)
 * node.before(el)    // adds before the node (outside)
 * node.after(el)     // adds after the node (outside)
 */

//____Example : node.append(el)________
//node.append(el)//adds at the end of node (inside);


//accessing the dive
let insDiv = document.querySelector("div");

//using node.append(el) and adds at the end of node (inside);
insDiv.append(newBtn);


//____Example : node.prepend(el)________
// node.prepend(el)//adds at the start of node (inside);
let newBtn2 = document.createElement("button");
newBtn2.innerText = "node.prependBtn";
insDiv.prepend(newBtn2);



//____Example : node.before(el)________
//node.before(el)//adds before the node (outside);
let newBtn3 = document.createElement("button");
newBtn3.innerText = "node.before";
insDiv.before(newBtn3);





//____Example : node.after(el)________
// * node.after(el)//adds after the node (outside);

let newBtn4 = document.createElement("button");
newBtn4.innerText = "node.after";
insDiv.after(newBtn4);


//Example with H1 tag

let newHeading = document.createElement("h1");
newHeading.innerHTML= "Hi i am new...!";

document.querySelector("body").prepend(newHeading);

newHeading.style.fontStyle ="italic";



//____DeletElement____
//____Example : node.remove(el)________
//node.remove()//remove the node

//creting paragraph
let newPara = document.createElement("p");
newPara.innerText = "This is a paragraph to delete....."

document.querySelector("body").after(newPara);

//Deleting the paragraph 

newPara.remove();



