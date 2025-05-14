// 2 types of Data -> Primitive and Non Primitive Data Type

// Primitive DataType (Call By Value)
// 7 types ->String, Number, Boolean, Symbol, BigInt, null, undefined

let userName = "Bobby" // type-> string
let age = 22 // type-> number
let gpa = 3.7 // type-> number
let isActive = true // type-> boolean
let id = Symbol("123") //  type-> symbol
let anotherID = Symbol("123")
console.log(id === anotherID); 
let bigNumber = 3n // type-> bigInt
let temp = null // type-> object
let girlFriend; // type-> undefined


// Referential type (Non Primitive) -> Call By Reference
// 3 -> Array, Object, Function

let place = ["kashi","Ramesworam","Ujjain","Omkar"] // type-> object
let newObj = {
    name:"Bobby",
    score:100,
} // type-> object
const func = function(){
    console.log("Hello World!");
} // type-> function object
console.log(typeof func);

