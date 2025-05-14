// const score = 100
// console.log(score)
// const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString())
// const newNumber = 123.66
// console.log(newNumber.toPrecision(4))
// console.log(newNumber.toFixed(3))
// const salary = 1000000
// console.log(typeof salary.toLocaleString("en-IN"));

// Maths 
// console.log(Math);
// console.log(Math.abs(-4))
// console.log(Math.round(4.67))
// console.log(Math.floor(4.9)) // gives small value i.e 4
// console.log(Math.ceil(4.2)) // gives max vlue i.e 5
// console.log(Math.max(4,5,7,1,9))
// console.log(Math.min(4,5,7,1,9))

// console.log(Math.random())
let min = 1
let max = 6

for(i=0;i<10;i++){
    console.log(Math.floor(Math.random()*(max - min + 1)) + min)
}


