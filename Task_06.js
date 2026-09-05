/* Reduce Method */

// const num = [10, 20, 30, 40, 50];
// let sum = num.reduce((sum, curr) => {
//     console.log(`Sum: ${sum}, Current: ${curr}`);
//     return sum + curr;
// }, 0);
// console.log(`Total Sum: ${sum}`);

// let sum = num.reduce((sum, curr) => sum + curr, 0);
// console.log(`Total Sum: ${sum}`);

/* Map Method */

// const price = [100,200,300,400,500];
// // const discountedPrice = price.map((p) => p - p * 0.1);
// // console.log(discountedPrice);
// const tax = price.map((p) =>p+p*0.18);
// console.log(tax);
// const priceWithTax = price.map((p) => ({ original: p, withTax: p * 1.18 }));
// console.log(priceWithTax);

//calculate product
// let num = [1, 2, 3, 4, 5];
// const mul = num.reduce((n1, n2) => n1 * n2, 1);
// console.log(mul);

/* ------Part 25------ 
 Real World Challenges
 Student Result Analyzer
 1- Create a function that takes an array of student objects as input. Each student object should have properties like name, marks, and grade.
 2- The function should analyze the student results and return an object containing the following information:
    - Total number of students
    - Average marks
    - Highest marks
    - Lowest marks
    - Number of students who passed (assuming passing marks is 40)
*/
// const students = [
//     {
//         name: "Aman",
//         marks: 85
//     },
//     {
//         name: "Rahul",
//         marks: 72
//     },
//     {
//         name: "Sara",
//         marks: 91
//     },
//     {
//         name: "Ali",
//         marks: 58
//     },
//     {
//         name: "Neha",
//         marks: 78
//     }
// ];
// function grade(marks) {
//     if (marks >= 90) {
//         return "A+";
//     } else if (marks >= 80) {
//         return "A";
//     } else if (marks >= 70) {
//         return "B";
//     } else if (marks >= 60) {
//         return "C";
//     } else if (marks >= 50) {
//         return "D";
//     } else {
//         return "F";
//     }   
// }

// console.log("<============Marksheet===========>")
// const totalStudents = students.length;
// const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
// const averageMarks = totalMarks / totalStudents;
// const highestMarks = Math.max(...students.map(student => student.marks));
// const lowestMarks = Math.min(...students.map(student => student.marks));
// const passedStudents = students.filter(student => student.marks >= 50).length;

// students.forEach(student => {
//     console.log(`${student.name} --> ${student.marks} --> ${grade(student.marks)} --> ${student.marks >= 50 ? "Pass" : "Fail"}`);
// });
// console.log(`<======= Final Report Card =======>`);
// console.log(`Total Students: ${totalStudents}`);
// console.log(`Average Marks: ${averageMarks}`);
// console.log(`Highest Marks: ${highestMarks}`);
// console.log(`Lowest Marks: ${lowestMarks}`);
// console.log(`Number of Students Passed: ${passedStudents}`);

// -----Part 26-----
// console.log(result(5, 10));
 // Output: 15
// function add(a, b) {//Function Declaration can be hoisted, so it can be called before its definition
//     return a + b;
// }
// const add = (a, b) => a + b;//Arrow funciton with implicit return throw error because of hoisting, arrow function is not hoisted
// const result = function add(a, b) {
//     return a + b; // This is a named function expression, which is not hoisted. It can only be called after its definition.
// }

// Queston: What will be the output of the following code snippet and why?

//(1)
// console.log(a);//undefined

// var a = 10;

// console.log(a);//10

//(2)
// let x = 10;

// function test() {
//     let x = 20;
//     console.log(x);
// }

// test();
// console.log(x);

//(3)
// const arr = [1, 2, 3];

// const result = arr.map(num => num * 2);// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// console.log(arr);
// console.log(result);
// (4)
// const user = {
//     name: "A",
//     greet() {
//         console.log(this.name);
//     }
// };

// user.greet();

// user.name = "B";

// user.greet();

//(5)
// const n = [3,8,9,1,2,5,4,7,6];
// // const sorted = n.sort((a, b) => a - b);// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. To sort numbers correctly, we provide a compare function that subtracts b from a. If the result is negative, a is sorted before b; if positive, b is sorted before a; if zero, their order remains unchanged.
// // console.log(sorted);

// const result = n.filter(n=>n%2!=0).map(n=>n*n).reduce((n,curr)=>n+curr,0)

// console.log(result)
//.filter():it filter based on condition, .map():it picks filtered no's and squared,
//.reduce():performs a additon on squared no's
















