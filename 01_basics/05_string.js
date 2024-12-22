const name = "abc"
const repoCount = 50

// console.log(name + repoCount + " value"); - old way of string concatenation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('pqrst-uvwxyz') // better way to define string

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("r"));
 
const newString = gameName.substring(0, 4)
console.log(newString); // it exclude last value (only 0 to 3)


const anotherString = gameName.slice(-10, 5) // can give negative values
console.log(anotherString);


const newString1 = "     ugiuhg   "
console.log(newString1.trim()); // remove blank spaces


const url = "https://google.com/abc%20zysa"

console.log(url.replace('%20' , '-'));

console.log(url.includes('google')) // true
console.log(url.includes('windows')) // false


console.log(gameName.split('-')); // array by splitting the string through '-'
