// DOM (Document Object  Model)

// console.log(window);
// console.dir(window);

// console.dir(window.document);
// console.log(window.document);

// console.log(document.body);

// let head=document.getElementById("heading");
// console.log(head);
// console.dir("heading");

// let headings=document.getElementsByClassName("heading_class");
// console.log(headings);
// console.dir(headings);

// let para=document.getElementsByTagName("p");
// console.log(para);

let heading=document.querySelector(".heading_class");
console.log(heading);

let headings=document.querySelectorAll(".heading_class");
console.log(headings);

let head=document.querySelector("#heading");
console.log(head);

//Properties:

// 1. Tag Name
let tag=document.querySelector("p");
console.log(tag.tagName);

// 2. inner Text

// let div=document.querySelector("div");
// console.log(div.innerText);

// 3. innerHTML
let div=document.querySelector("div");
console.log(div.innerHTML);

// 4. Text Content:
let text=document.querySelector("h5");
console.log(text.innerText);
console.log(text.textContent);
