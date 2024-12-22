const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // 100.00 - used for precision value

const otherrNumber = 123.8966
console.log(otherrNumber.toPrecision(3)); // 124
console.log(otherrNumber.toPrecision(4)); // 123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // 1,000,000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000


// Math library

console.log(Math);
console.log(Math.abs(-4)); // result will be positive value
console.log(Math.round(4.97)); // round off
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(3, 5, 6, 8)); // minimum value
console.log(Math.max(3, 5, 6, 8)); // maximum value

console.log(Math.random()); // always between 0 and 1
console.log((Math.random()*10) + 1); // for minimum value to be 1


const min = 10
const max = 20

console.log((Math.floor(Math.random() * (max - min + 1))) + min);
