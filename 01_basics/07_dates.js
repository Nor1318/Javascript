let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(typeof myDate)

// let myCreatedDate = new Date(2003 , 8 , 4 , 1 ,15)
// let myCreatedDate = new Date("2003-9-4") 
let myCreatedDate = new Date("09-04-2003")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now() / 1000 ));
console.log(myDate.getMonth());
console.log(myDate.toLocaleString('default',{
    weekday:"long",
}));





