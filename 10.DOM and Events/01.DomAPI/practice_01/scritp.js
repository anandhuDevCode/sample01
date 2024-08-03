console.log("    <h1>Practice Questions </h1>")

/*Create a H2 heading element with 
  text-"Hello javaScript "
 .Append "from Apnan Collage students" 
 to this text using JS
*/

let h2 = document.querySelector("h2");
h2.innerText += "from Apnan Collage students"
console.log(h2)

/*
Create 3 divs with common class name 
- "Box". Access them &
add some unique text to each

*/


let divs = document.querySelectorAll(".box");

console.dir(divs)
console.dir(divs[0])
console.dir(divs[1])

// divs[0].innerText += "new uique value 1";
// divs[1].innerText += "new uique value 2";
// divs[2].innerText += "new uique value 3";


//Another waya of doin this 
let idx = 1;
for(dive of divs){
    dive.innerText += `new uique value ${idx}`;
    idx++;
}


//Note : When ever we do work in node used to use loop
//We will always prefer doing in a loop 
