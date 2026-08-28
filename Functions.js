// // function calculate(width,height){

// //     const res = {
// //       Area_Square: `${width*height}`,
// //       Perimeter :`${2*(width+height)}`  
// //     }
// //     // let res1 = width*height;
// //     // let res2 = 2*(width+height);

// //     return res;
// //     // return res1,res2;
    

// // }
// // console.log(calculate(4,1.3));

// //------Discount Calculator--------
// //  function applyDiscount(price,discountPercentage=10){
// //     let res = (price*discountPercentage)/100;
// //     let discounted_price = price-res;
// //     let discount_percentage = discounted_price/price*100 ;
// //     return [discounted_price,discount_percentage];

// //  }
// //     console.log("money and discounted_percentage",applyDiscount(512,50));
// //     console.log(applyDiscount(512));

// //------sum total---------
// function sum_total(){
//     let sum =0;
//     // ===arguments is an array - like objects containing every passed input
//     // --argument Object: available only inside standard/regular function declaration(not inside arrow functions)
//     //--[Array-like, not a true array, has .length propertiy and index access(argument[i]),]
//     //But does not have array methods like .map() or .filter()
//     // If no arguments passed loop doesn't run and returns 0 safely.
//     for(let i =0;i<arguments.length;i++){
//         sum+=arguments[i];
//     }
//     return sum;
// }
// //----------Examples---------
//   console.log(sum_total(1,2,3,4));
//   console.log(sum_total(1.02,2.2,3.00123,4.75));
//   console.log(Math.ceil(sum_total(1.02,2.2,3.00123,4.75)));
//   console.log(Math.floor(sum_total(1.02,2.2,3.00123,4.75)));
  
//------- Write a program usign JS named calculate(num1,num2,operationCallBakc)
// function calculate(n1,n2,operationCallback){
         
//          return operationCallback(n1,n2);
// }
// function add(n1,n2){
//     return n1+n2;
// }
// function mul(n1,n2){
//     return n1*n2;
// }

// console.log(calculate(4,9,add));
// console.log(calculate(4,9,mul));

//========(Java Script Closures)=========

// Closure is a function that remembers and can access variables from its outer (parent) scope, even afer the 
// parent function has finished executing and left the call stack
const add = (n1,n2) => {
    return n1+n2;
}
console.log(add(9,13));

const add2 = (n1,n2) => n1+n2;
console.log(add2(2,4));

// learning of this.
// const me ={
//     name:"sahib",
//     mob:"2222222",
//     email:"xyz@gmail.com"
// }
//  function Write(naam){
//     return `${this.name}`;
//  };
// console.log(Write(name));

//-----write one-line arrow function named createProduct that takes id,name,and price..Itshould directly return an object formatted like
// const createProduct = (id,name,price)=>({id,name,price})
// console.log(createProduct(101,"Keyboard",50,true))

//----Since arrow functions do not have an arguments object, use the modern Rest Parameter(...)syntex
// const multiplayall = (multiplier, ...numbers) => {
//     return numbers.map(num => num * multiplier);
// }
// console.log(multiplayall(3,4,5,96));

//=====Filter & Transform Pipeline
const students = [
  { name: "Alice", score: 85, active: true },
  { name: "Bob", score: 45, active: true },
  { name: "Charlie", score: 90, active: false },
  { name: "Diana", score: 72, active: true }
];

const ReviewStu = (list) => 
list
   .filter((student)=>student.active&&student.score>=70)// .filter() check and satisfy condition
   .map((student)=>student.name.toUpperCase())//.map() map the filtered data like (name of student)

   console.log(ReviewStu(students));

























