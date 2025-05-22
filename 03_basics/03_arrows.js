
const user = {
    username: "Bobby",
    age: 21,
    isLogged: false,
    welcomeMessage: function(){
        // console.log(this)
        return `Hello, ${this.username}.Welcome to my App`
    }

}

// console.log(user.welcomeMessage())
// user.username = "Nor"
// console.log(user.welcomeMessage());

// console.log(this)

// ++++++++++++++ Arrow Function ++++++++++++++

// function one(){
//     let uname = "Bobby"
//     console.log(this.uname)
// }
// one()

const userGreeting = () =>  (`Hello,user.`) // Implicit return -> return is implicitly given no need to mention
// Implicit return use case can be to return an object through arrow function

const objFunc = () =>({
    name: "bobby"
})
console.log(objFunc())

console.log(userGreeting())