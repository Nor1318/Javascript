let fruitPrice = {
    apple : 250,
    banana:110,
    mango:200
}

let neededFruit = "mango"

switch(neededFruit){
    case "apple":
        console.log(fruitPrice.apple)
        break;
    case "banana":
        console.log(fruitPrice.banana)
        break;
    case "mango":
        console.log(fruitPrice.mango)
        break;
    default:
        console.log("No fruits available")
}


// emty object checker
const myObj = {}
if(Object.keys(myObj).length == 0){
    console.log("Empty Obj")
}

// Nullish Coalescing operator
let val = 10 ?? 4;
console.log(val); 