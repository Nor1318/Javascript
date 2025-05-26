/* for-of loop */
// for-of loop used in array and maps

const myArr = [1, 2, 3, 4, 5]

for (const num of myArr) {
    // console.log(num)
}

// Map defination
const map = new Map();
map.set("NP","Nepal");
map.set("JP","Japan");
map.set("UK","United Kingdom");
map.set("US","United States")
map.set("US","United States") // map dont have repeated value
// console.log(map)

// map iteration using for-of

// for(const [value,key] of map){
//     console.log(`${key}: ${value}`)
// }

const myObj = {
    name: "Bobby",
    age: "22"
}
// for(const item of myObj){
//     console.log(item)
// } // objects are not iterable using for of

// for-of string

// let greeting = "Hello world!"
// for (const word of greeting) {
//     console.log(word)
    
// }

/* for-in loop */
// for in used for object
// for(const item in myObj){
//     console.log(myObj[item])
// }

// for (const index in myArr) {
//     console.log(index)
    
// }
// for (const key in map) {
//    console.log(map)
// }

/* forEach loop */

const newArr = ["js","java","py","cs"]
// newArr.forEach( (item) => {
//     console.log(item)
// })

function printer(num){
    console.log(num);
}
// newArr.forEach(printer)

// newArr.forEach( (item,index,arr) => {
    // console.log(item,index,arr)
// })

const finalArr = [
    {
        fname:"Bobby",
        lname:"Dahal",
        age:22
    },
    {
        fname:"Mark",
        lname:"Show",
        age:69
    }

]

finalArr.forEach((item)=>{
    console.log(item.lname)
})