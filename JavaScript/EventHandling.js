// Events:

// let button1=document.querySelector("#btn1");

// button1.onclick=()=>{
//     console.log("Button is Clicked");
// }

// button1.onclick=(evt)=>{
//     console.log(evt.target);
//     console.log(evt.type);
//     console.log(evt.clientX , evt.clientY);
// }

// let div1=document.querySelector("#div1")

// div1.onmouseover=()=>{
//     console.log("You are inside the box");
// }

// Event Listner:

// button1.addEventListener("click",(evt)=>{
//     console.log("Button is Clicked");
//     console.log(evt.target);
//     console.log(evt.type);
//     console.log(evt.clientX , evt.clientY);
// });

// Light Mode & Dark Mode:

// A) normal Technique:

// let mode=document.querySelector("#btn");
// let md="light"
// mode.addEventListener("click",()=>{
//     if(md==="light"){
//         document.querySelector("body").style.backgroundColor="black";
//         md="dark";
//     }
//     else{
//         document.querySelector("body").style.backgroundColor="white";
//         md="light";
//     }
// })

//B) class Technique:

let mode=document.querySelector("#btn");
let body=document.querySelector("body");
let md="light"
mode.addEventListener("click",()=>{
    if(md==="light"){
        body.classList.add("dark");
        body.classList.remove("light");
        md="dark";
    }
    else{
        body.classList.add("light");
        body.classList.remove("dark");
        md="light";
    }
})




