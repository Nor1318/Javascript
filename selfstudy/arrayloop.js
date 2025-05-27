// // Given an array of numbers, return a new array with only the numbers greater than 5.

// const numbers = [1, 4, 6, 8, 3, 7, 9];
// console.log(numbers.filter((num) => num > 5))

// //Given an array of temperatures in Celsius, return a new array with each temperature converted to Fahrenheit.
// // Formula: F = C * 9/5 + 32

// const celsiusTemps = [0, 20, 30, 40];
// const faranheitTemps = celsiusTemps.map((num) =>((num * (9/5)) + 32))
// console.log(faranheitTemps);



// // Given an array of user objects, return an array of usernames of users who are over 18.
// const users = [
//   { name: 'Alice', age: 17 },
//   { name: 'Bob', age: 22 },
//   { name: 'Charlie', age: 19 }
// ];

// console.log(users.filter((obj)=>obj.age > 18).map((obj) =>obj.name ))

// // Given an array of expenses, calculate the total amount spent, but only for expenses greater than 50.
// const expenses = [20, 100, 50, 75, 30, 200];

// console.log(expenses.filter((arr) => arr > 50).reduce((acc,val)=>acc + val,0))

// // Given an array of products with price and quantity, calculate the total value of inventory 
// // (sum of price * quantity for each product).

// const products = [
//   { price: 10, quantity: 2 },
//   { price: 5, quantity: 5 },
//   { price: 20, quantity: 1 }
// ];

// console.log(products.map((item)=> item.price * item.quantity).reduce((acc,val)=>acc + val,0))



// Given an array of words, return the longest word in the array.

const words = ['apple', 'banana', 'cherry', 'blueberry'];

console.log(words.reduce((acc,val) =>{
    if(val.length > acc.length){
       return val
    }
    else return acc
},""))