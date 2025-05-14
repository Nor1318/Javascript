
const detail = "My name is Bobby Dahal."
let index = 4
console.log(`The character at index ${index} is ${detail.at(index)}.`); // .at takes both +ve and -ve value
console.log(detail.charAt(index)) // only takes +ve value and 0 and return empty string if given negative value
console.log(detail.charCodeAt(index))
console.log(detail.codePointAt(index))

const str1 = "Hello"
const str2 = "World!"
console.log(str1.concat(" ",str2));
console.log(detail.endsWith("l."))
console.log(detail.includes("Bobby"))
console.log(detail.indexOf("a", 19));
console.log(detail.length)
console.log(detail.slice(-6,-1));
console.log(detail.split(" "))



