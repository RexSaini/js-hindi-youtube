// for of 

let arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

let greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each character is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India") // not double entries only unique values

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    'Game1': "NFS",
    'Game2': "Spiderman"
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// } 
// objects can no be iterated like this

