"use strict";

// postfix increment
let x = 9
let y = x++

console.log(`x:${x}, y:${y}`)

//prefix increment

y = ++x
console.log(`x:${x},y:${y}`)

let x2 = 3n
console.log(typeof x2)
let y2 = x2++
console.log(y2,x2);
y2 = ++x2
console.log(y2,x2)
