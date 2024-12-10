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
