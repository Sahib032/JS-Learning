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
const user = {
    name: "Rahul",
    age: 25,
    city: "Delhi",
    isLoggedIn: true
};

console.log("keys of obj",Object.keys(user))
console.log("Values of obj",Object.values(user))
console.log("key-value pair of obj",Object.entries(user))
console.log("to check email exists or not",user.hasOwnProperty("email"))
console.log("to check name exists or not",user.hasOwnProperty("name"))





















