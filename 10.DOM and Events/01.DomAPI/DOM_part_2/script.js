console.log("Hello World! . It's simple huble");

console.log("It's dom api");

console.log(window)

let myId = document.getElementById("myBtn");
console.log(myId);
console.dir(myId);


let myClass = document.getElementsByClassName("myClass");
console.log(myClass);
console.dir(myClass);

let  myPara = document.getElementsByTagName("p")
console.log(myPara);
console.dir(myPara);


//_____Query Selector_____

let firstEl = document.querySelector("p")
console.dir(firstEl);

let allEl = document.querySelectorAll("p");
console.dir(allEl);


console.dir(document.querySelector("#myBtn"))


//____First Child ____

console.dir(document.body.firstChild);

//Output ; #text



//____



let myDiv = document.querySelector('div');
console.dir(myDiv)


