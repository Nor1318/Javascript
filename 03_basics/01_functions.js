
// function firstFunction(){
//     console.log("B");
//     console.log("o");
//     console.log("b");
//     console.log("b");
//     console.log("y");
// }
// firstFunction()

function addTwoNumbers(num1,num2){
    return num1 + num2
}
// console.log(addTwoNumbers(4,null))

function loginUserMessage(username = "Ram"){
    // if(!undefined){
    //     console.log("Please enter a valid name.");
    //     return 
    // }
    return `${username},logged in.`
}
// console.log(loginUserMessage())

function shoppingCartCalculator(...nums){     // rest operator
            return nums;
}

console.log(shoppingCartCalculator(200,400,700));

// Passing object in function

const user = {
    username: "Bobby",
    salary:"100k"
}

function userDefination(anyObj){
    console.log(`Hi,${anyObj.username}.Your salary is ${anyObj.salary}.`)
}
userDefination(user)

function arrayInFunction(anyArray){
    console.log(anyArray[2])
}
arrayInFunction([200,300,400])
