const myArray = [0, 1, 2, 3, 4, 5]

let myArr = ["abc", "xyz"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArray[0]);

// Array methods

myArray.push(6) // inserts in the end
console.log(myArray);

myArray.push(7)

myArray.pop() // removes the last element
console.log(myArray);

myArray.unshift(9) // inserts at the start
console.log(myArray);

myArray.shift()
console.log(myArray); // removes the first element

console.log(myArray.includes(10));
console.log(myArray.indexOf(10)); // -1 if element not present

myArr = myArr2.join()
console.log(myArr); // output will be string 
console.log(myArr2);

// slice, splice
console.log("A ", myArr);

let Arr = myArr2.slice(1, 3) // not change the original array
console.log(Arr);

let Arr2 = myArr2.splice(1, 3) // change the original array
console.log(Arr2);

