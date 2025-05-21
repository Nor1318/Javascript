
//Global Scope -> works all in programs and can be overwrite
// var c = 500
let a = 100
if(true){           // local scope -> inside bracketss
    let a = 10
    const b = 20
    // var c = 30   
    console.log(a)
}

// console.log(a);
// console.log(b);
console.log(a); // The internal scope will not interrupt the global scope outside the block