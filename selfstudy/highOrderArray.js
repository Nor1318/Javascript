//1️⃣ Use forEach to Print Squares:
// Write a program that uses forEach to loop through an array of numbers and print the square of each number.

// let myArr = [1,2,3,4,5]
// myArr.forEach((item)=>{
//     console.log(item**2)
// })

// //1️⃣ For...in with an Object
// // Create an object with key-value pairs (like {name: "John", age: 30, city: "New York"}) and use for...in to print each key and value.

// let myObj = {
//     name: "John",
//     age: 30, 
//     city: "New York"
// }
// for (const key in myObj) {
//    console.log(`${key}:-${myObj[key]}`)
// }

// // 2️⃣ ForEach with an Array of Colors
// // Create an array of color names and use forEach to print a sentence for each, like "Red is a nice color."

// const colors = ["Red","Blue","Yellow"]
// colors.forEach((color)=>{
//     console.log(`${color} is a nice color.`)
// })

//  For...of with an Array of Numbers
// Create an array of numbers (1 to 5) and use for...of to calculate the total sum of all numbers.
let sum = 0;
const numbers = [1,2,3,4,5]
for (const num of numbers) {
       sum += num
}
console.log(sum);


