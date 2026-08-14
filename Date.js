//Working with dates in javascript
// let date = new Date()

// console.log("Type:1",date)
// console.log("Type:2",date.toString())
// console.log("Type:3",date.toDateString())
// console.log("Type:4",date.toTimeString())
// //This will give the date and time in local format(dd/mm/yyyy, hh:mm:ss)
// console.log("Type:5",date.toLocaleString())
// //This will give the date in local format(dd/mm/yyyy)
// console.log("Type:6",date.toLocaleDateString())
// console.log("Type:7",date.toLocaleTimeString())

// console.log("Type:10",date.toJSON())
//below user defined date or date set by user
let date1 = new Date(2022, 5, 20, 10, 30, 0) //year, month(0-11), day, hour, minute, second
console.log("time in milliseconds since 1st Jan 1970",date1.getTime()) //gives the time in milliseconds since 1st Jan 1970
console.log("year",date1.getFullYear()) //gives the year
console.log("month",date1.getMonth()) //gives the month(0-11)
console.log("day of the month",date1.getDate()) //gives the day of the month(1-31) 
console.log("day of the week",date1.getDay()) //gives the day of the week(0-6) 0-Sunday, 1-Monday, 2-Tuesday, 3-Wednesday, 4-Thursday, 5-Friday, 6-Saturday
console.log("hour",date1.getHours()) //gives the hour(0-23)
console.log("minutes",date1.getMinutes()) //gives the minutes(0-59)
console.log("seconds",date1.getSeconds()) //gives the seconds(0-59)
console.log("milliseconds",date1.getMilliseconds()) //gives the milliseconds(0-999)
console.log("timezone offset",  date1.getTimezoneOffset()) //gives the difference in minutes between UTC and local time 
console.log("UTC year",date1.getUTCFullYear()) //gives the UTC year
console.log("current time",Math.floor(Date.now()/1000)) //gives the current time in seconds since 1st Jan 1970 
console.log("local time in Asia/Kolkata",date1.toLocaleString('default', { weekday: 'long', timeZone: 'Asia/Kolkata' })) //gives the date and time in local format(dd/mm/yyyy, hh:mm:ss) in Asia/Kolkata timezone 

let School ={
    name:"Jamians Acdemy",
    established: 1920,
    location: "New Delhi",
}
console.log("School Name:",School.name)
console.log("Established:",School.established) //gives the day of the month(1-31)
console.log("Location:",School.location)









