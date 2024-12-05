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

// Operations

let value = 3
let negValue = -value
console.log(negValue)

let str1 = "Hello"
let str2 = " World"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2) //Output will be 12
console.log("1" + 2 + 2) //Output will be 122
console.log(1 + 2 + "2") //Output will be 32

console.log(+true) //Output will be 1
console.log(+"") //Output will be 0

let gameCounter = 100
gameCounter++ 
console.log(gameCounter); // Output 101
