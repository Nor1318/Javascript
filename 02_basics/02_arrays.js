
let first_world_country = ["USA","Austrila","France"]
let second_world_country = ["Denmark","Ireland","England"]
let third_world_country = ["Nepal","India","Pakistan"]


// first_world_country.push(third_world_country)
// console.log(first_world_country[3][0]);
// let all_country = first_world_country.concat(second_world_country,third_world_country)
// console.log(all_country)


//Spread way to merge the arrays
// let all_country = [...first_world_country,...second_world_country,...third_world_country]
// console.log(all_country);

// flat method

let numArray = [1,2,3,[4,5],6,[[7,[8]]]]
let balanced_numArray = numArray.flat(Infinity)
console.log(balanced_numArray)

console.log(Array.isArray([1,2,3]))
console.log(Array.from("Bobby"));

let mathMarks = 92
let englishMarks = 94
let scienceMarks = 99

let marksArray = Array.of(mathMarks,englishMarks,scienceMarks)
console.log(marksArray);




