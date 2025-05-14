const name = "Bobby"
const age = 22

// console.log(name + " " + age); //Donot use this way as much as possible
console.log(`My name is ${name}.I am ${age} years old.`) // use this method (string Interpolation)

const gameName = new String("tekken-9") // another way to declare string variable

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("k"));
const newString = gameName.substring(0,4)
console.log(newString)
const anotherString = gameName.slice(-8,-5)
console.log(anotherString);

const newStringOne = "     Bobby.    "
console.log(newStringOne.trim())
const url = "www.bobbydahal.com/photos%20gallery"
console.log(url.replace("%20","."));
console.log(url.includes("Bobby"))
console.log(gameName.split("-"))



