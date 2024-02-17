// Functions
//A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

// 1. Named Function:

// function myfunction(a,b){
//  return a*b;
// }

// let x=myfunction(3,4);
// console.log(x);

// 2. Anonymous Fuction or Function as expression:

// const y=function(a,b){
//     return a*b;
// }

// let z=y(5,4);
// console.log(z);

// 3. Self Invoking Functions:

// (function(){
//     console.log("I am self executed Function")
// })();

// 4. Arrow Function:

// const c=(x,y)=>{return x*y};
// let temp =c(5,6);
// console.log(temp);

// function sum(arr){

//     for(let i=0;i<arr.length;i++){
//         console.log(arr[i]);
//     }
//     return arr;
// }
// const arr=[1,2,4,5,6,9];
// let answer = sum(arr);
// console.log(answer);

// 5.Function for count Vowels in String:

// function CountVowels(str){

//     let count=0;
//     for(const char of str){
        
//         if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
//             count++;
//         } 
//     }
//     return count;
// }

// const c=CountVowels("aeiouashik");
// console.log(c);

/* 6. forEach Function */

// forEach method is used to iterate over elements of an array and execute a provided function once for each array element
// Function can be passes as parameters

// const arr=[1,2,3,4];

// arr.forEach(val=>{
//     console.log(val)
// })

// arr.forEach(function funValue(val){
//     console.log(val);
// })

/* 7. map Function */

/*
The map method in JavaScript is used to create a new array by applying a function to each element of an existing array.
It iterates through the array and executes a provided function once for each element,
returning a new array with the results of calling the function on each element. */

// arr=[1,2,3,4];

// let newarray=arr.map(val=>{
//     return val*2;
// })

// console.log(newarray);

/* 8. Filter Fumction */

/*filter method is used to create a new array with all elements that pass a certain condition, determined by a provided callback function.
It iterates through each element of the array and returns a new array containing only the elements for which the callback function returns true. */

// arr=[1,2,3,4,5,6,7,8];

// let evenArr = arr.filter(val=>{
//     return val%2===0;
// })

// console.log(evenArr);

/* 9. reduce Function */

/*reduce method is used to reduce an array to a single value by executing a provided function for each element of the array,
accumulating the result as it iterates through the array. 
It applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. */

arr=[1,2,3,4,5];

let sum=arr.reduce((priv,curr)=>{
    return priv+curr;
})

console.log(sum);

let greater= arr.reduce((priv,curr)=>{
    return priv>curr ? priv:curr;
})

console.log(greater)
