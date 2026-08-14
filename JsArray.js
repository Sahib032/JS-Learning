// // // const arr = new Array(2,5,6,8,7,10);
// // const arr = [2,5,6,8,7,10];
// // console.log("Array:",arr);
// // arr.push(0);
// // arr.push(9);
// // console.log("Array after push:",arr);
// // arr.pop();// it removes the very last element of the array
// // console.log("Array after pop:",arr);
// // arr.shift(); // it removes the very first element of the array         
// // console.log("Array after shift:",arr);   
// // arr.unshift(1); // it adds the element at the very first position of the array          
// // console.log("Array after unshift:",arr);
// // arr.splice(2,1); // it removes the element at the given index and the second parameter is the number of elements to be removed
// // console.log("Array after splice:",arr);
// // arr.splice(2,0,3);  // it adds the element at the given index and the second parameter is the number of elements to be removed
// // console.log("Array after splice:",arr);
// // arr.splice(2,1,4);          
// // console.log("Array after splice:", arr);
// // const arr1 = [1,2,3,4,5];
// // console.log("Array1 joined:", arr1.join(" ")); // it joins the elements of the array and returns a string
// // console.log("Array1 type:", typeof arr1); // it returns the type of the array
// // console.log("Array1 joined:", arr1.join("-")); // it joins the elements of the array and returns a string   
// // console.log("Array1 type:", typeof arr1); // it returns the type of the array       



// // arry = [1,2,3,4,5];
// // console.log("Array:",arry);
// // console.log("Array length:",arry.length); 
// // console.log("Array type:",typeof arry);
// // console.log("Array is array:",Array.isArray(arry)); // it checks whether the given variable is an array or not  
// // console.log("Array slice:",arry.slice(1,3)); // it returns a new array containing the elements from the given index to the given index
// // console.log("Array from:",Array.from(arry)); // it returns a new array from the given array 
// // console.log(arry.splice(2,1)); // it removes the element at the given index and the second parameter is the number of elements to be removed
// // console.log("Array after splice:",arry);
// // console.log("Array after splice:",arry.splice(2,0,6));    

// //------------Flattening an array------------------
// let arr2 = [1,2,[3,4,[5,6]]];
// console.log("Array:",arr2);
// console.log("Array flat:",arr2.flat());
// // ----sperad operator
// let arr3 = [1,2,3];
// let arr4 = [4,5,6];
// let arr5 = [...arr3,...arr4];
// console.log("Array after spread operator:",arr5);
// console.log("Array after spread operator:",...arr2);
// // ----sperad operator with objects
// let obj1 = {name:"John",age:30};
// let obj2 = {city:"New York",country:"USA"};
// let obj3 = {...obj1,...obj2};
// console.log("Object after spread operator:",obj3);
// // ----sperad operator with strings
// let str = "Hello";
// let arr6 = [...str];
// console.log("Array after spread operator with string:",arr6);
// // ----sperad operator with numbers
// let num = 12345;
// let arr7 = [...num.toString()];
// console.log("Array after spread operator with number:",arr7);   
// // 
// console.log(Array.isArray("Sahib"));
// console.log(Array.from("Sahib"));
// console.log((Array.of(30,35,45,55)).join);


//--------filter---------
const a = [5,78,85,4,3];
console.log(a.filter(greater_then_78));



























