
//Global Scope -> works all in programs and can be overwrite
// var c = 500
let a = 100
if (true) {           // local scope -> inside bracketss
    let a = 10
    const b = 20
    // var c = 30   
    console.log(a)
}

// console.log(a);
// console.log(b);
console.log(a); // The internal scope will not interrupt the global scope outside the block

function one() {
    const username = "Bobby";
    function two() {
        const lastname = "Dahal"
        console.log(username + lastname);

    }
    // console.log(lastname) 
    two();
}

one();

if (!undefined) {
    const age = 21
    if (age === 21) {
        const salary = 45000
    }
    // console.log(salary)
}
// console.log(age) 


// +++++++++++ Hoisting +++++++++++++++

// its a concept when js rus it knows about all variables and function decleration so even the name
// is kept before the decleration its fine in case of var and function but not in the case of let and 
// const due to temporal dead zone issue


// function decleration
console.log(firstway(4))  //can be accessed before or after the function decleration
function firstway(num) {

    return num + 1;
}

// function expression
secondway(5)   // cannot be accessed before the initialization of the variable 
const secondway = function (num) {
    return num + 1;
}