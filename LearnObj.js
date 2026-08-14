// // // Let's learn Objects in javascript
// // const myObj = {
// //     name :"AXB",
// //     class : "MSc",
// //     Subject:"Maths"
// // }
// // console.log(myObj.name)
// const user={
//     name:"Aria",
//     class:"M.Sc",
//     age:25,
//     Rank:1,
//     percentage:85,
//     isAdmin:false
// }
// // console.log(user)
// user.email = "some@gamil.com"//1 Email added
// // console.log(user)
// // user.age = 27//2 age updated
// delete user.isAdmin //3 delete admin
// user.college = "MCM"
// console.log(user)

// // Write Function getProperty(obj,keyName)
// function getProperty(user, keyName) {
//     if(user[keyName]) {
//         return user[keyName];
//     }else{
//         return"property not found";
//     }
// }
// console.log(getProperty(user,"name"));

// // Below code has some issue in execution

// // function getProperty(user, keyName) {
// //     if(Object.hasOwn(user,Keyname)) {
// //         return user[keyName];
// //     }else{
// //         return"property not found";
// //     }
// // }
// // console.log(getProperty(user,"name"));



// // function getProperty(user,keyName){
// //     if(keyName in user){
// //         return user[keyName];
// //     }
// //     return"Property not found";
// // }
// // console.log(getProperty(user,"name"))

// const arr =["apple",
//            "Papaya",
//            "Orange",
//            "Litchi",
//            "apple",
//            "Litchi"
// ]
// // function countFruit(arr){
// //     const fruitcount = {};// created empty object to store fruit count
// //          for(let fruit of arr){
// //            fruitcount[fruit] = (fruitcount[fruit] || 0)+1 ;
// //          }
// //          return fruitcount;
// // }
// // console.log(countFruit(arr));
// // reduce useage in below code
// // const fruitcount ={};
// // arr.forEach(element => {
// //     fruitcount[element] = (fruitcount[element] || 0) + 1;
// // });
// // console.log(fruitcount);

// // salary summarizer js program
// const salaries = {// Object : salaries created
//     John : 3000,
//     Ann : 4200,
//     Pete : 2800,
//     Alice: 5100
// };
// function salsum(salaries,key){
//     // object data need to convert to array to use reduce function
//     // to get total salary we use Obj.val to add numeric data first it is converted to array
//      const salaryArr = Object.values(salaries);
//      // some of salaries
//      const total_sal_sum = salaryArr.reduce((acc,salaryArr)=> acc+salaryArr,0)
//     let highest_paid = " ";
//     let maxSal =0;
//     // Use Object.entries() to get [name, salary] pairs with for...of
//     for(let [name,sal] of Object.entries(salaries)){
//         if(maxSal<sal){
//             maxSal = sal;
//             highest_paid = name;
//         }
//         // maxSal = Math.max(maxSal,sal); it will not tell when it updates a number
        
//     }
    
//     //for(let [name,sal] in salaryArr)--> it loops over array indexes
//      return {total_sal_sum,maxSal,highest_paid};
// }
// // console.log(salaries);
// console.log(salsum(salaries));

// // simple way
// function salary_sum(salaries){
//     let sum = 0;
//     let maxSal = 0;
//     let highestPaid =" ";
//     for(let person in salaries){
//          const sal = salaries[person];
//         sum+=sal;
//         if(sal>maxSal){
//             maxSal=sal;
//             highestPaid = person;
//         }
//     }
//     return{sum,maxSal,highestPaid};
// }
// console.log(salary_sum(salaries));



//----------Object Merging & Defaults---------------
//Write a function createSettings(userOptions) that merges default app settings with custom user options.
const defaultSettings ={
    theme:"Light",
    Notification:true,
    fontsize:"medium",
    autoSave: false
};
function createSettings(userOptions = {}){
    return {...defaultSettings, ...userOptions};
}

console.log(createSettings(userOptions));




















