// Stack(For Primitive DataTypes) && Heap(For NonPrimitive DataTypes)

// Example of stack implementation

let score = 100
let anotherScore = score
anotherScore = 99
console.log(score); // The Copy was changed and not actual value hence 100
console.log(anotherScore); // 99

// Example of heap implementation

let myDetails = {
    name:"Bobby",
    age:21
}
let changedDetails = myDetails
changedDetails.age = 22
console.log(myDetails) //since the change is made to reference hence value of age will be 22
console.log(changedDetails) 


