
/*  

() - paranthesis
{} - braces
[] - Bracket

*/


// array decleration 

let arr1 = [0, 1, 2, 3, 4, 5] // 1st way
let arr2 = new Array(["Zero", "One", "Two"]) // 2nd way

// console.log(arr1)
// console.log(arr2);
// console.log(typeof arr2)

// Array Access

// console.log(arr1[0]);

// Array Properties

// arr1.push(6)
// arr1.push(7)
// console.log(arr1)
// arr1.pop()
// console.log(arr1)
// arr1.unshift(9)
// arr1.unshift(8)
// console.log(arr1);
// arr1.shift()
// console.log(arr1.includes(8)) // false->not in array
// console.log(arr1.indexOf(4)) // 5th index
// console.log(arr2.indexOf(4)) // -1 -> not in the list

// referencial or shallow copy
// let arr3 = arr1
// arr3.pop()
// console.log(arr1); 

// let arrString = arr1.join()
// console.log((arrString).replaceAll(",",""));

// let arr3 = arr1.slice(0,3)
// console.log(arr3) 
// console.log(arr1)

let months = ["jan", 'feb', 'april', 'may', 'june']
months.splice(2, 0, "march")
months.splice(6, 0, "apple")
months.splice(6, 1, "july", "august", "september")
let deleted = months.splice(6, 3, "Mix")
console.log(deleted)
console.log(months);




