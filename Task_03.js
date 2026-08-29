// =======Part 20=========
// Shopping Cart Function
//1.Product,2.Quantity,3.Description,4.Price
// const upscCourse =[
//     {id:104,
//     product:"IAS",
//     description:"Indian Administrative Service",
//     price:"₹100",
//     },
//     {id:105,
//     product:"IPS",
//     description:"Indian Police Service",
//     price:"₹100"
// }
// ]
//  function addCard({id,product,description,price}){
//     console.log(`+-----Product Card [ID: ${id}]-------+`)
//     console.log(`Course: ${product}`)
//     console.log(`Description: ${description}`)
//     console.log(`Price: ${price}`)
//     console.log(`+--------*******************-------+`)
//  }
//  upscCourse.forEach(course => addCard(course))

function calculateCartPrice(...rest){
   return rest.reduce((sum,curr) => sum+curr,0)
}
//rest.reduce((sum,curr) rest operator(...) alag alag bhikhre hue no ko ek array bana kr usme dalta hai aur reduce us array ko sum kr deta hai
console.log(calculateCartPrice(10,20,30,40,50))
//.reduce() works only on arrays not on comma separated number par
//...rest opertor works on comma-separated numbers

//(...) rest operator ka real world example user ka password or secret information ko chod kar
// baki cheezo ko public krne mai kia jata hai
 const profile={
    name:"abx",
    designation:"clerk",
    eamil:"clerk@gmail.com",
    password:"54646",
    token:"leletoken"
 }

 const{password,token,...details} = profile
 console.log(details)
// password aur token alg karke bacha-kucha sab details mai pack ho gya hai

//----=== Part 21===----
// Scope Prediction






