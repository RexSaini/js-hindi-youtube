/* Primitive - call by value
7 types : String, Number, Boolean, null, undefined
Symbol, BigInt 
*/

// JavaScript is a dynamically typed language

/* Reference or Non-Primitive - call by refernce
Arrays, Objects, Functions
*/

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // Symbol will make both of them unique so output will be false

let myArray = []
let myObject ={
    name : "xyz",
    age : 22
}

let myFunction = function (){
    console.log("Hello world");
}

console.log(typeof myFunction); // function

let myTemperature = null
console.log(typeof myTemperature); // it will show object


// Memory
/*
Stack - Primitive datetypes (in stack copy is given)
Heap - Non primitive datatypes (in heap reference is given)
*/

let myYoutubename = "hiteshchoudharydotcom"

let anotherName = myYoutubename
anotherName = "chaiaurcode"

console.log(myYoutubename); // hiteshchoudharydotcom
console.log(anotherName); // chaiaurcode

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "xyz@gmail.com"

console.log(userOne.email); // xyz@gmail.com
console.log(userTwo.email); // xyz@gmail.com

