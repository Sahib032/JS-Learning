const percentage = 57
const pocket_money = 104.365987

console.log(`Percentage: ${percentage}%`)
console.log(`Pocket Money: $${pocket_money}`)
console.log(pocket_money.toString().length)
console.log(percentage.toFixed(2))
console.log(pocket_money.toString().padStart(5, '0'))
console.log(percentage.toString().padEnd(5, 'yes'))
console.log(pocket_money.toPrecision(5))
console.log(pocket_money.toExponential(2))
console.log(Math.round(pocket_money))
console.log(Math.floor(pocket_money))
console.log(Math.ceil(pocket_money))
console.log(Math.sqrt(pocket_money))
console.log(Math.pow(pocket_money, 2))
console.log(pocket_money.toLocaleString('en-IN', { style: 'currency', currency: 'INR' }))



console.log(Math.asin(1))
console.log((Math.random()*10)+1)   //gives values between 1 and 10
console.log(Math.floor((Math.random()*10)+1))
console.log(Math.ceil((Math.random()*10)+1))
const max = 30
const min = 17
console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //gives values between 30 and 17
