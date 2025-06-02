// 1️⃣ Basic Promise:

// Write a function that returns a Promise that resolves after 2 seconds with the message "Success!"

// Write code to call this function and handle the resolved value.

// const promiseOne = new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("Success!")
//         },2000)
// })
// promiseOne.then(function(response){
//     console.log(response)
// })

// Chaining Promises:

// Write a Promise that resolves with a number (e.g., 5), then use .then() 
// to multiply the number by 2, then add 10, then log the result.
new Promise(function(resolve,reject){
    resolve(5)
}).then((response)=> response * 2).then((response)=> response + 10)
.then((response)=> console.log(response))

// 3️⃣ Handling Errors:

// Write a Promise that rejects with the message "Error occurred!"

// Catch the rejection and log the error message.
new Promise(function(resolve,reject){
    let error = true
    if(!error){
        resolve("No error")
    }
    else{
        reject("Error occurred!")
    }
}).then((response)=>console.log(response)).catch((response)=>console.log(response))

// Promise.all:

// Create three Promises:

// One resolves with "A" after 1 second

// One resolves with "B" after 2 seconds

// One resolves with "C" after 3 seconds

// Use Promise.all to log the combined result.
const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("A")
    },1000)
})
const promiseTwo = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("B")
    },2000)
})
const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("C")
    },3000)
})
Promise.all([promiseOne,promiseTwo,promiseThree]).then((response)=>console.log(response))

// Promise.race:

// Create two Promises:

// One resolves after 1 second with "First"

// One resolves after 3 seconds with "Second"

// Use Promise.race to log which one resolves first.
const promiseFirst = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("First")
    },1000)
})
const promiseSecond = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("Second")
    },3000)
})

Promise.race([promiseFirst,promiseSecond]).then((response=>console.log(response)))