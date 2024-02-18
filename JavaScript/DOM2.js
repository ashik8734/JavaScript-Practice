// DOM Attribute:

//1. Get Attribute:
// let div=document.querySelector("div");
// let b=div.getAttribute("id");
// console.log(b);

// 2. Set Attribute: 

//div.setAttribute("id","newbox");

// 3.style: 

// let div=document.querySelector("div");

// div.style.backgroundColor = "red";

// 4. Insert Element:

let btn=document.createElement("button");
btn.textContent="Click Me..!"
let div=document.querySelector("div");

div.append(btn); // adds at end of the node (inside)
// btn.innerText="click me";
// btn.style.width="50px";
// btn.style.height="50px";

// div.prepend(btn); // adds at start of the node (inside)

// div.before(btn); // adds before node(outside)
 
// div.after(btn); //adds after node(outside)

let head=document.createElement("h1");
head.innerHTML="<i>This is new Heading </i>"
document.querySelector("body").before(head);

// 6. Deleting Elements:

document.querySelector("#btn").remove();

