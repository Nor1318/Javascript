
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
console.log(addTwoNumbers(4,null))

function loginUserMessage(username = "Ram"){
    // if(!undefined){
    //     console.log("Please enter a valid name.");
    //     return 
    // }
    return `${username},logged in.`
}
console.log(loginUserMessage())