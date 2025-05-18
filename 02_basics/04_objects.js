// const appUser = new Object()

 const appUser = {

 }
 appUser.id = "123"
 appUser.fullname = {
    userfullname:{
        fname: "Bobby",
        lname:"Dahal"
    }


}
 appUser.email = "new@gmail.com"
 appUser.isLogged = true

 
// console.log(appUser);
console.log(appUser.fullname.userfullname.fname); // optional chaining -> Uedi fullname nai xaina vaney?

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3)

const dbValue = [
    {
        1:"a",
        2:"b",
    },
     {
        1:"a",
        bob:"b",
    },
     {
        1:"a",
        2:"b",
    }
]

console.log(dbValue[2]["2"]);
// console.log(Object.keys(appUser));
// console.log(Object.values(appUser));
console.log(Object.entries(appUser));
console.log(appUser.hasOwnProperty("emails"));


// ----------Object deStructuring-------------

const myObject = {
    fullname:"Bobby Dahal",
    age:22,
    salary:undefined,
    isActive: false
}

// console.log(myObject.fullname)
const {fullname: myname} = myObject
console.log(myname)





