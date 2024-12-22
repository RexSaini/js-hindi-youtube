const name = "abc"
const repoCount = 50

// console.log(name + repoCount + " value"); - old way of string concatenation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('pqrstuvwxyz') // better way to define string

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("r"));
