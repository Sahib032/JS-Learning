/* Expense Tracker*/
const expenses = [
    {
        title: "Food",
        amount: 250,
        category: "Food"
    },
    {
        title: "Bus",
        amount: 50,
        category: "Travel"
    },
    {
        title: "Movie",
        amount: 300,
        category: "Entertainment"
    },
    {
        title: "Lunch",
        amount: 200,
        category: "Food"
    },
    {
        title: "Metro",
        amount: 100,
        category: "Travel"
    }
];


//Basic

// console.log("With Basic")
// let sum=0
// let count =0
// for(key of expenses){
//     sum+=key.amount
//     count++
// }
// let avg = sum/expenses.length
//  console.log("Total Expenses is : ₹",sum)
//  console.log("No of Expenses",count)
//  console.log("Average",avg)

//  console.log("With Filter")
// const foodExp = expenses.filter((exp)=>exp.category ==="Food")
//                         .reduce((sum,curr)=>sum+curr.amount,0)
// console.log("Food Expenses ",foodExp)

// const travelExp = expenses.filter((exp)=>exp.category ==="Travel")
//                         .reduce((sum,curr)=>sum+curr.amount,0)
// console.log("Food Expenses ",travelExp)

// const EntExp = expenses.filter((exp)=>exp.category ==="Entertainment")
//                         .reduce((sum,curr)=>sum+curr.amount,0)
// console.log("Food Expenses ",EntExp)
// // Q 1: Total Expense ?
// const total_expense = expenses.reduce((sum,curr)=>sum+curr.amount,0)
// console.log("Total_Expense: ",total_expense)
// //Q 2: Number of expenses
// console.log("No of expenses :",expenses.length)
// //Q 3: Avergae of expenses
// const avg = total_expense/expenses.length
// console.log("Average :",avg)
// //Q 4: Food Expenses
// const foodExpenses = expenses.filter((expenses)=>expenses.category ==="Food").reduce((sum,curr)=>sum+curr.amount,0);
// console.log("Food Expenses : ",foodExpenses)
// // //Q 5: Travel Expense
// const TravelExpenses = expenses.filter((expenses)=>expenses.category ==="Travel").reduce((sum,curr)=>sum+curr.amount,0);
// console.log("TravelExpense :",TravelExpenses)
// // //Q 6: Expense above ₹200
// const exp_200 = expenses.filter((expenses)=>expenses.amount>200).reduce((sum,curr)=>sum+curr.amount,0);
// console.log("Expense above ₹200 :",exp_200)

// const tag = expenses.map((exp)=>exp.title)
// console.log("Expenses Titles :",tag)

// const total_amt = expenses.reduce((sum,curr)=>sum+curr.amount,0)
// console.log("Total Amount :",total_amt)

// const highestExp = Math.max(...expenses.map(exp => exp.amount))

// console.log("Highest Expense :",highestExp)

// const LowestExp = Math.min(...expenses.map(exp => exp.amount))
// console.log("Lowest Amount :",LowestExp)

// //Categoroy Calculate Sum
// console.log("<======Expense Report=========>")
// const food = expenses.filter((exp)=>exp.category ==="Food")
//                      .reduce((sum,curr)=>sum+curr.amount,0)
// console.log("Food : ₹",food)

// const Travel = expenses.filter((exp)=>exp.category ==="Travel")
//                         .reduce((sum,curr)=>sum+curr.amount,0)
// console.log("Travel : ₹",Travel)

// const Entertainment = expenses.filter((exp)=>exp.category ==="Entertainment")
//                              .reduce((sum,curr)=>sum+curr.amount,0)
// console.log("Entertainment : ₹",Entertainment)

