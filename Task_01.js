// ------Part 1------
// // let name ="Sahib"
// // let age = 999
// // // let course = "MS"
// // let cgpa = 8
// // let isPlaced = false
// // let college = "mcm"
// // console.table([name,age,course,cgpa,isPlaced,college])
// // //Part 2
// // let a=10;
// // a=20;
// // console.log(a)
// // const b = 30;
// // // b = 40;
// // console.log(b)
// // var c = 50;
// // c =60;
// // console.log(c)

// ------ part 3------
// let name ="Sahib"
// let age = 999
// let course = "MS"
// let cgpa = 8
// let isPlaced = false
// let college = "mcm"
// let sum
// let grade =''
// const obj = {
//     name:"sahib",
//     school:"hcps"
// }
// let symbol
// let a =[4,5,6]
// function add(n1, n2){
//     return n1+n2
//     console.log("chal gya !!!")
// }

// console.log("1",typeof(name))
// console.log("2",typeof(age))
// console.log("3",typeof(isPlaced))
// console.log("4",typeof(sum))
// console.log("5",typeof(grade))
// console.log("6",typeof(obj))
// console.log("7",typeof(symbol))
// console.log("8",typeof(a))
// console.log("9",typeof(add))
// console.log("10 Null",null)
// console.log("10 Why typeof() null doesn't return 'null'?")

// -----Part 4------
// console.log("1- Convert '100' to Number is",Number("100"),"Type is",typeof(Number("100")))
// console.log("2- Convert '100abc' to Number is",Number("100abc"),"Type is",typeof(Number("100abc")))
// console.log("3- Convert null to Number is",Number(null),"Type is",typeof(Number(null)))
// console.log("4- Convert undefined to Number is",Number(undefined),"Type is",typeof(Number(undefined)))
// console.log("5- Convert boolean(true) to Number is",Number(true),"Type is",typeof(Number(true)))
// console.log("6- Convert ' ' to Number is",Number(""),"Type is",typeof(Number(" ")))
// console.log("7- Convert 'hello' to Number is",Number("hello"),"Type is",typeof(Number("hello")))

//----Part 5-----
// let passed = "true"
// let marks = "8"
// console.log(passed)
// console.log(marks)
// console.log(Number(passed)+5)//?????
// console.log(Number(marks)+10)

//-----Part 6-------
// console.log("5"+2)
// console.log(5+"2")
// console.log("5"-2)//?
// console.log("5"*2)
// console.log("5"/2)

// console.log(1+2+"3")
// console.log("1"+2+3)
// console.log(true+1)
// console.log(false+10)

//------Part 7---------
// == do comparison between the data
// === do comparison between datatypes
// console.log(5 =="5")
// console.log(5 ==="5")// here both number and datatype also comparing
// console.log(0 ==false)
// console.log(0 ===false)
// console.log(null ==undefined)
// console.log(null ===undefined)

//-------part 8--------\
// let a =10
// let b = a

// b =20
// console.log(a)
// console.log(b)


// let user1 ={
//     name:"Ali"
// }
//  let user2 = user1
//  user2.name = "sahib"
//  //---give same output as sahib beacuse both are
//  // are pointing to the same reference in heap memory
//  console.log(user1.name)
//  console.log(user2.name)
// // reason user1 and user2 are pointing to a same reference
// //that's why both are print sahib

//--------part 9-------

// let name = "JavaScript Developer"
// console.log(name.length)
// console.log(name[0])
// console.log(name[name.length-1])
// console.log(name.replace("Developer"," Engineer"))
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.slice(0, 10))
// console.log(name.indexOf("Developer")) // to get position
// console.log(name.includes("Script"))
// console.log(name.split(" "))

//-----Part 10------
// let full_name =" mohd sahib ansari "

// console.log(full_name.trim())// .tirm() remove extara space
// console.log(full_name.toLowerCase())
// console.log(full_name.trim().replaceAll(" ","-"))// full_name.trim().replaceAll(" ","-")

//-------Part 11--------

// let price = 799.99
// let quantity = 3
// let discount = 15

// total = quantity*price
// final = total - discount
// console.log(total)
// console.log(final)
// console.log(Math.round(final).toFixed(2))

//----------Part 11---------
//Notes: Math.random() generates a decimal between [0,1)
//(max-min+1) = (75- 50+1)=[0,26)
// let min=50
// let max =75
// console.log(Math.floor(Math.random()*(max-min+1)+min))

//--------Part 12---------

// let birthYear =1998
// currentYear = new Date().getFullYear()
// console.log("The approx current age:",currentYear-birthYear)

//----Part 13--------
// below created an array of name of days indexed -> [0,6]
// const daysOfWeek =[ 
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
// ];
// let curr = new Date()// here created a Date Object
// function DigitalDayMeter(){
//     return`
//     Date: ${curr.getDate()}
//     Month: ${curr.getMonth()+1}
//     Year: ${curr.getFullYear()}
//     Day: ${daysOfWeek[curr.getDay()]}`;
// }
// console.log(DigitalDayMeter())

//-----Part 14-------
 // Array Operation
// let language=["JavaScript","Java","Python","C++"]
// //peek() to look what's on top
// //push() to add element at last
// //pop() to delete element from last
// //unshift() to add at start(add element at start)
// //shift() to remove element from start(Fist element)
// //
// console.log(language.includes("Java"))
// console.log(language.indexOf("Python"))
// console.log(language.toString())
// console.log(language.slice(0,2))// extract element
// console.log("(splice) Returns deleted items:",language.splice(0,2))
// // console.log(language.splice("MediaTek"))
// // Meaning of below operation is start at index 1, remove 0 elements, insert "GO","C"
// // console.log(language.splice(1,0,"GO","C"))
// console.log(language)
// language.splice(1,0,"Go","C")// 1 stands a place or index at which new itmes will take place,0 stands for not elements will be deleted from array at index 1 make space
// console.log(language)
// language.push("C#")
// console.log("After using push()",language)
// language.pop()
// console.log("After using pop()",language)
// //add element at beginng
// language.unshift("C#")
// console.log("After using unshift()",language)
// //remove first element
// language.shift()
// console.log("After using shift()",language)

//-----Part 15------

// let numbers = [10,20,30,40,50]
// console.log(numbers)
// console.log(numbers.slice(1,3))// just bring a slice a piece from the array
// console.log(numbers)
// console.log(numbers.splice(1,2))// it remove element at index 1 and 2
// console.log(numbers)

// ---Combine arrays
// let forntend = ["HTML","CSS","JavaScript"]
// let backend = ["Node","Express","MongoDB"]
// // whole = forntend.concat(backend)
// //console.log(whole)
// // usging spread
// console.log("Using spread operator:",...forntend,...backend)

// Nested Array
// let data =[
//     1,
//     2,
//     [3,4],
//     [5,[6,7]],
//     8,9
// ];
// flatten = data.flat(Infinity)//.flat(Infinity) flatten mutliple level
// console.log(data)
// console.log(flatten)



























