console.log(2 < 2); // false
console.log(2 == 2); //true

console.log("2" == 2) // true->first convert str to num then compare
console.log("2" === 2) // false -> strict check no conversion
console.log(null == 0) //false null is treated as special operator
console.log(null >= 0)//unlike equal operator in comparision optr first null is converted to num(0) then compare so true
console.log(null == undefined) //true null and undefined is treated as same