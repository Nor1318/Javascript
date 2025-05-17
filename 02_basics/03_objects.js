
// Singelton using constructor
Object.create

// literal way to create object

const mySym = Symbol("Key1")
let phone = String("Apple")
const myUser = {
    name:"Bobby",
    mySym:mySym,
    age:21,
    [phone]:phone,
    location:"Pokhara",
    email:"bobby@superman.com",
    isLogged:false,
    lastLogged:["Monday","Friday"]
}
//Accessing object
//  console.log(myUser.email) // 1st way to access
//  console.log(myUser["email"]) // 2nd way 
 
 // Changing the value of object
 
 myUser.email = "bobby@ironman.com"
//  console.log(myUser)
//  Object.freeze(myUser)
 myUser.name = "Tony"
//  console.log(myUser);
 
 myUser.greeting = function(){
    console.log("Hello,user");
    
 }
 myUser.greeting2 = function(){
    console.log(`Hello,${this.name}`);
    
 } 
myUser.greeting()
console.log(myUser.greeting);

myUser.name = "Peter"
myUser.greeting2()


 



