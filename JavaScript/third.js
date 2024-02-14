/* Loops and Strings */

// 1. While Loop:

let sum=0;
let i=1;

while(i<10){
    sum=sum+i;
    i++;
}
alert(sum);
// 2. For Loop:

const cars=["BMW","Suzuki","Mercedez","Toyota"];

for(let i=0;i<cars.length;i++){
    console.log(cars[i]);
}

// 3. For of Loop
const cars=["BMW","Suzuki","Mercedez","Toyota"];

for(let x of cars){
    console.log(x);
}

// Strings:

let str="Ashik";
let str1="Suraj"
console.log(str);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(3));
console.log(str.charCodeAt(3));
console.log(str.concat(str1));




