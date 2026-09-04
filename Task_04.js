//-----Part 21-----

 //const grades ={
//     A:"A+",
//     B:"B+",
//     C:"C",
//     D:"D",
//     E:"E",
//     F:"F"
// }
// let marks=85;
// let userGrade =" "
// console.log("<============Marksheet===========>")
// if( marks<100 && marks>=90){
//     userGrade = grades.A
// }else if(marks>=80){
//     userGrade = grades.B
// }else if(marks>=70){
//     userGrade = grades.B
// }else if(marks>=60){
//     userGrade = grades.C
// }else if(marks>=50){
//     userGrade = grades.D
// }else{
//     userGrade = grades.F
// }
// console.log(`Marks :${marks}`)
// console.log(`Grade :${userGrade}`)

//-----Part 22-----
//----Login Validation----


// let isLogigedIn = true;
// let hasPassword = true;
// let isBlocked = false;
// let username ="ABX"
// let password = "123"

// if(isLogigedIn){
//     console.log("Please login to continue")
//     console.log("Enter your username and password")
// }
// else if(hasPassword&&!isBlocked){
//     console.log("Enter your username and password")
//     if(username==="ABX" && password==="123"){
//         console.log("Welcome,",username,", your password is:" ,password)
//     }
// }else{
//     console.log("Invalid credentials")
// }

//-------gemini suggestion for login validation
// Note: To get user input in Node.js, we can use the readline module. 
// Below is a simple implementation of a login validation system using readline.
// const readline = require("readline");

// // Setup terminal input/output
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Mock database
// const dbUser = {
//   username: "ABX",
//   password: "123",
//   isBlocked: false
// };

// let isLoggedIn = false;

// // 1. Guard check: already logged in?
// if (isLoggedIn) {
//   console.log("You are already logged in.");
//   rl.close();
// } else {
//   console.log("=== SECURE NODE LOGIN ===");

//   // 2. Ask for Username
//   rl.question("Enter Username: ", (inputUsername) => {
    
//     // 3. Ask for Password
//     rl.question("Enter Password: ", (inputPassword) => {

//       // 4. Validate credentials
//       if (dbUser.isBlocked) {
//         console.log("Access Denied: Account is blocked.");
//       } else if (
//         inputUsername.trim() === dbUser.username && 
//         inputPassword.trim() === dbUser.password
//       ) {
//         isLoggedIn = true;
//         console.log(`\nLogin Successful! Welcome back, ${dbUser.username}.`);
//       } else {
//         console.log("\nError: Invalid username or password.");
//       }

//       // Always close the terminal listener when done
//       rl.close();
//     });
//   });
// }


// //Login Validation
//  let isLogigedIn = true;
//  let hasPassword = true;
//  let isBlocked = false;
 
//  if(isLogigedIn&&hasPassword&&!isBlocked ){
//      console.log("Login Allowed") 
     
//  }else{
//       console.log("Login Denied") 
//  }

//-----Part 23-----
// Switch Case
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// rl.question("Enter a number (1-7) to get the corresponding day of the week: ", (input) => {
//   const dayNumber = parseInt(input);
  
// // Day = new Date().getDay();
// switch (dayNumber) {
//     case 1:
//         console.log("Today is Sunday");   
//         break;
//     case 2:
//         console.log("Today is Monday"); 
//         break;
//     case 3:
//         console.log("Today is Tuesday");  
//           break;
//     case 4:
//         console.log("Today is Wednesday");    
//           break;
//     case 5:
//         console.log("Today is Thursday");
//         break;
//     case 6:
//         console.log("Today is Friday");
//         break;
//     case 7:
//         console.log("Today is Saturday");       
//           break;
//     default:
//         console.log("Invalid day");
// }
//   rl.close();
// })

// day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday "]
// const now = new Date();// Get the current date and time
// const dayIndex = now.getDay();// Get the day index (0-6) where 0 is Sunday and 6 is Saturday
// console.log(`Day Index: ${dayIndex}`);
// console.log(`Today is ${day[dayIndex]}`);

//-----Part 24----- 
// Truthy and Falsy Values
// 0 -> Falsy :-(Won't be entered in if condition)
// 1 -> Truthy :-(Will be entered in if condition)
// false -> Falsy :-(Won't be entered in if condition)
// true -> Truthy :-(Will be entered in if condition)
// "" -> Falsy :-(Won't be entered in if condition)
// "hello" -> Truthy :-(Will be entered in if condition)
// null -> Falsy :-(Won't be entered in if condition)
// undefined -> Falsy :-(Won't be entered in if condition)
// NaN -> Falsy :-(Won't be entered in if condition)
// [] -> Truthy :-(Will be entered in if condition)[ is an empty array but still considered truthy in JavaScript]
// {} -> Truthy :-(Will be entered in if condition){is an empty object but still considered truthy in JavaScript}
// console.log("Truthy and Falsy Values in JavaScript:");
// console.log("0 is", Boolean(0)); // false
// console.log("1 is", Boolean(1));
// if(0) {
//     console.log("This is truthy");
// }
// if(1) {
//     console.log("This is truthy");
// }
// if(false) {
//     console.log("This is truthy");
// }
// if(true) {
//     console.log("This is truthy");
// }
// if("") {
//     console.log("This is truthy");
// }
// if("hello") {
//     console.log("This is truthy");
// }
// if(null) {
//     console.log("This is truthy");
// }
// if(undefined) {
//     console.log("This is truthy");
// }
// if(NaN) {
//     console.log("This is truthy");
// }
// if([]) {
//     console.log("This is truthy");
// }
// if({}) {
//     console.log("This is truthy");
// }




























