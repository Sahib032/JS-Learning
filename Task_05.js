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

const numbers = [1, 2, 3, 4, 5];
// Using object literal shorthand syntax Cleaner Modern Syntax
const result = {
    numbers: numbers.map((num) => num * 3)
        .filter((num) => num > 10) // Implicit return without parentheses
};

console.log(`triple: ${result.numbers}`);



















