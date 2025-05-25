
// 🔢 1. Print Numbers
// Write a loop that prints numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
    console.log(i);    
}

//🔄 2. Even Numbers
// Write a loop that prints only even numbers between 1 and 20.

for (let i = 1; i <= 20; i++) {
    if(i % 2 == 0){
        console.log(i)
    }    
}

//🧮 3. Multiplication Table
// Write a loop that prints the multiplication table of 5 (from 1 to 10).

for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${i*5}`)
    
}

// 🔢 4. Sum of Array Elements
// Given an array of numbers, use a loop to find the sum of the elements.
// Example Array: [2, 4, 6, 8, 10]

const myArray = [2, 4, 6, 8, 10]
let sum = 0
for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i]
    
}
console.log(`Sum of array: ${sum}`)

//5. Use break
// Write a loop that prints numbers from 1 to 10, but stops if the number is 5.
for(let i = 1; i <= 10; i++){
    if(i == 5){
        break
    }
    console.log(i)
}

// 🔁 6. Use continue
// Write a loop that prints numbers from 1 to 10, but skips printing 7.

for (let i = 1; i <= 10; i++) {
    if(i == 7)
        continue
    console.log(i)
    
}

// 🔗 7. Nested Loop (Pattern)
// Use a nested loop to print the following pattern:
let myArr2 = []
for(let i = 0; i < 4; i++){
    for(j = 0; j <= i; j++){
        myArr2.push("*")
        
    }
    console.log(myArr2.toString().replaceAll(","," "))
    myArr2 = []
}
// 🔗 7. Nested Loop (Pattern) Real way
// Use a nested loop to print the following pattern:

for(let i = 0; i < 4; i++){
  
    console.log("*".repeat(i + 1))
    
}

// Write a loop that finds the largest number in an array.
// Example Array: [3, 9, 1, 6, 8]

let maximum = 0;
let myArr = [3, 9, 1, 6, 8]
for (let i = 0; i < myArr.length; i++) {
    if(maximum < myArr[i]){
        maximum = myArr[i]
    }
    
}
console.log("Maximum:" + maximum)



