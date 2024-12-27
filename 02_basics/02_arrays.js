let marvel_heros = ["thor", "ironman", "spiderman"]
let dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // add the second array as a single element instead of merging them

let heros = marvel_heros.concat(dc_heros) // merge the arrays
console.log(heros);

let new_heros = [...marvel_heros, ...dc_heros] // spread operator similar to concat 
console.log(new_heros);

let newArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
let realArray = newArray.flat(Infinity)
console.log(realArray);

console.log(Array.isArray("Hitesh")) // false
console.log(Array.from("Hitesh")) // string to array
console.log(Array.from({name: "abc"})) // can't convert so gives empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
