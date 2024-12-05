let score = "33"

console.log(typeof score)

let valueInNumber =  Number(score) //Converts into Number data type
console.log(typeof valueInNumber)

/*
conversions
"33" => 33
"33abc" => NaN
true =>1; false =>0
*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn) //Converts in Boolean
console.log(booleanIsLoggedIn)

/*
1 => true; 0 =>false
"" =>false
"abc" => true
*/

let someNumber = 33

let stringNumber = String(someNumber) //Converts into String
console.log(stringNumber)
console.log(typeof stringNumber)