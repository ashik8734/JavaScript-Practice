// Functions
//A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

// 1. Named Function:

function myfunction(a,b){
 return a*b;
}

let x=myfunction(3,4);
console.log(x);

// 2. Anonymous Fuction or Function as expression:

const y=function(a,b){
    return a*b;
}

let z=y(5,4);
console.log(z);

// 3. Self Invoking Functions:

(function(){
    console.log("I am self executed Function")
})();

// 4. Arrow Function:

const c=(x,y)=>{return x*y};
let temp =c(5,6);
console.log(temp);

function sum(arr){

    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
    return arr;
}
const arr=[1,2,4,5,6,9];
let answer = sum(arr);
console.log(answer);
