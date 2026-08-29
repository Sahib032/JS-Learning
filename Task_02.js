// -----Part 16-----
// const student ={
//     name:"Shivan",
//     age: 32,
//     course: "MS",
//     marks: 499,
//     skills:["C","Python","Java","Communication"]
// };

// console.log(student.name)
// console.log(student["marks"])
// console.log(student.skills[3])
// student.grade = "A+"//Modifying data
// console.log(student)
// grade ="B+"
// console.log(student)
// delete student.grade
// console.log(student)
// Object.freeze(student)// Once freeze nothing will be changed
// console.log(student)
// student.name ="Ahmad"
// console.log(student)

//----------Part 17--------
// name = "Namita"

// function greet(){
//   console.log(`Hello! My name is ${this.name}`)
// }
// greet()

//-------Part 17-------
// const user = {
//     name: "Rahul",
//     age: 25,
//     city: "Delhi",
//     isLoggedIn: true
// };

// console.log("keys of obj",Object.keys(user))
// console.log("Values of obj",Object.values(user))
// console.log("key-value pair of obj",Object.entries(user))
// console.log("to check email exists or not",user.hasOwnProperty("email"))
// console.log("to check name exists or not",user.hasOwnProperty("name"))


// const personal ={
//   name: "ABZ",
//   age:89
// }

// const professional ={
//   role:"Developer",
//   skills:["java","javaScript"]
// }

// console.log("by using spread() operator :",{...personal,...professional})//spread operator

// console.log("by using Object.assign() :",Object.assign({},personal,professional))

//-------part 18----------
// Object destructuring - this is a JavaScript syntax introduced in ES6
// that allows to extract properties from an object and assign them directly to distinct variables in a single,clean line of code
// const course ={
//   courseName :"JavaScript",
//   price:999,
//   instructor:"ABx"
// }
// // Destructuring

// const {courseName,price,instructor}=course

// console.log(courseName);
// console.log(price);
// console.log(instructor);

//-------Part 19--------
// JSON Understanding
 const response ={
  success:true,
  data:{
    username:"xyz",
    skills:["Java","Python","React"]
  }
 }
 // {success,data:{username,skills}} , success,data are keys of response,but data itself an object and 
 // their keys are username and skills, so that's a way to defined destructor of nested object
const {success,data:{username,skills}}=response
console.log(username)
console.log(skills)




