let userEmail = "h@gmail.com"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Do not have user email");
}

/*
falsy values:
false, 0, -0, BigInt 0n, "", null, undefined, NaN
*/

/*
truthy values:
all values except fasly values
"0", 'false', " ", [], {}, function(){}
*/

let myArray = []

if (myArray.length === 0) {
    console.log("Array is empty");
}

let myObject = {}

if (Object.keys(myObject).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null, undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 25

console.log(val1);

// Terniary Operator
// condition ? true : false

let iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("More than 80") : console.log("Less than 80");

