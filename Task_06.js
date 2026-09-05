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
const students = [
    {
        name: "Aman",
        marks: 85
    },
    {
        name: "Rahul",
        marks: 72
    },
    {
        name: "Sara",
        marks: 91
    },
    {
        name: "Ali",
        marks: 58
    },
    {
        name: "Neha",
        marks: 78
    }
];
function grade(marks) {
    if (marks >= 90) {
        return "A+";
    } else if (marks >= 80) {
        return "A";
    } else if (marks >= 70) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else if (marks >= 50) {
        return "D";
    } else {
        return "F";
    }   
}

console.log("<============Marksheet===========>")
const totalStudents = students.length;
const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
const averageMarks = totalMarks / totalStudents;
const highestMarks = Math.max(...students.map(student => student.marks));
const lowestMarks = Math.min(...students.map(student => student.marks));
const passedStudents = students.filter(student => student.marks >= 50).length;

students.forEach(student => {
    console.log(`${student.name} --> ${student.marks} --> ${grade(student.marks)} --> ${student.marks >= 50 ? "Pass" : "Fail"}`);
});
console.log(`<======= Final Report Card =======>`);
console.log(`Total Students: ${totalStudents}`);
console.log(`Average Marks: ${averageMarks}`);
console.log(`Highest Marks: ${highestMarks}`);
console.log(`Lowest Marks: ${lowestMarks}`);
console.log(`Number of Students Passed: ${passedStudents}`);


































