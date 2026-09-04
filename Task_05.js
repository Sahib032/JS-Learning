// ---Part 25------
// Basic Loops in JavaScript
// let count = 0;
// for(let i=1;i<=100;i++){
//     if(i%2!=0){
//         console.log(`Odd values : ${i}`);
//         count++;
//     }
// }
// console.log(`Total odd values: ${count}`);
// let n=1001
// for(let i=1;i<=10;i++){
//        console.log(`${n} X ${i} = ${n*i}`);
//     }

//sum using for loop
// let sum=0;
// for(let i=1;i<=100;i++){
//     sum+=i;
//     }
// console.log(`Sum of numbers from 1 to 100: ${sum}`);
//sum using formula
// let n =100
// sum = n*(n+1)/2
// console.log(`Sum of numbers from 1 to ${n}: ${sum}`);

// for(let i=1;i<=20;i++){
//     if(i==15){
//         console.log(`Skipping : ${i}`);
//        continue; //continue statement skips the current iteration and moves to the next iteration of the loop
    
//     }
// console.log(`Value of i: ${i}`);
// }

// while loop
// let i=1;
// while(i<=10){
//     console.log(`Value of i: ${i}`);
//     i++;
// }

// do while loop
// let i=1;
// do{    
//     console.log(`Value of i: ${i}`);
//     i++;
// } while(i<=10);

// ---Part 26------
// const languages = ["JavaScript", "Python", "Java", "C++", "C#", "Ruby", "Go", "Swift", "Kotlin", "PHP"];
// // for in loop iterates over the indices of the array
// for (let lang in languages) {
//     console.log(`Language: ${languages[lang]}`);
// }
// // for of loop iterates over the values of the array
// for (let lang of languages) {
//     console.log(`Language: ${lang}`);
// }

// let String = "JAVASCRIPT";
// for (let char in String) {
//     console.log(`Character: ${String[char]} at index ${char}`);
// }

// //using for of loop to iterate over the characters of the string
// for (let char of String) {
//     console.log(`Character: ${char}`);
// }

//---Part 27------
// const numbers = [1, 2, 3, 4, 5];
// // forEach method iterates over the values of the array
// numbers.forEach((num) => {
//     console.log(`Number: ${num}`);
// });  

// const numbers = [1, 2, 3, 4, 5];
// // forEach method iterates over the values of the array
// numbers.forEach((num, index) => {
//     console.log(`Number: ${num} at index ${index}`);
// });

// const numbers = [1, 2, 3, 4, 5];
// const Map = {};
// Map.numbers = numbers.map((num) => {
//     return num * num;
// });
// console.log(`Squared: ${Map.numbers}`); 

// Using object literal shorthand syntax Cleaner Modern Syntax
// const result = {
//     numbers: numbers.map((num) =>num * num)
// };
  
// console.log(`Squared: ${result.numbers}`);

// const numbers = [1, 2, 3, 4, 5];
// // Using object literal shorthand syntax Cleaner Modern Syntax
// const result = {
//     numbers: numbers.map((num) => num * 3)
//         .filter((num) => num > 10) // Implicit return without parentheses
// };

// console.log(`triple: ${result.numbers}`);
// Note:- Map -> use when need to store or use output array after this loop finishes 
// Note:- ForEach -> use when you don't need to store or use output array after this loop finishes

//-----Part 28-----
// const student = {
//     name: "Mohd Sahib",
//     age: 29,
//     course: "M.Sc + MCA"
// };
// //for of loop is used to iterate over the values of an object
// for (let key of Object.keys(student)) {
//     console.log(`${key}-> ${student[key]}`);
// }
// //for in loop is used to iterate over the keys of an object
// for (let key in student) {
//     console.log(`${key}-> ${student[key]}`);
// }
/*
Quick Memory Hooks
for...in ---> Look IN an Object for its Keys.
for...of ---> Get values OF an Array.
.forEach() ---> Do an action FOR EACH item (no early exit).
*/

// const colors = ["red", "green", "blue"];

// for (const color in Object.keys(colors)) {
//   console.log(colors[color]); // "red", "green", "blue"
// }
// colors.forEach((color) => {
//   console.log(color); // "red", "green", "blue"
// })

//Why is for...in generally not your first choice for iterating an array?
// Because it iterates over the keys of an object, not the values of an array.  

// const numbers = [10,20,30,40,50];
// numbers.forEach((num,index) => {
//     console.log(`Index: ${index}, Value: ${num}`);
// })
// //.reduce() method is used to reduce an array to a single value by applying a function to each element of the array. It takes two arguments: a callback function and an initial value. The callback function takes two arguments: an accumulator and the current value. The accumulator is the value that is returned after each iteration, and the current value is the current element being processed in the array.
// mul  = numbers.reduce((sum,curr) => sum*curr,1)
// console.log(`Product of numbers: ${mul}`);

//.filter() method is used to create a new array with all elements that pass the test implemented by the provided function. It takes a callback function as an argument, which is called for each element in the array. The callback function should return true or false, indicating whether the element should be included in the new array. The filter() method does not modify the original array, but instead returns a new array with the filtered elements.
const numbers = [5,12,18,3,25,7,30];

// numbers.filter((num) => {
//     if(num>10){
//         console.log(`Number greater than 10: ${num}`);
//     } 
// });
// numbers.filter((num) => {
//     if(num%2==0){
//         console.log(`Even Number: ${num}`);
//     }   
// });

// numbers.filter((num)=>{
//     let isPrime = true;
//     for(let n=2;n<=Math.sqrt(num);n++){
//         if(num%n==0){
//             isPrime = false;// found a factor or divisor stop checking further
//             break;
//         }
//     }
//     if(isPrime){
//         console.log(`Prime: ${num}`);
//     }else{
//         console.log(`Not Prime: ${num}`);
//     }
// })