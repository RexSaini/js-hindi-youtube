let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(typeof myDate); // object

let myCreatedDate1 = new Date(2023, 0, 23)
let myCreatedDate2 = new Date(2023, 0, 5, 3)
console.log(myCreatedDate1.toDateString());
console.log(myCreatedDate2.toLocaleString());


let newDate = new Date("01-14-2023")
console.log(newDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate1.getTime());

console.log(Math.floor(Date.now()/1000)); // convert milliseconds to seconds

let anotherDate = new Date()
console.log(anotherDate.getDay());
console.log(anotherDate.getMonth()); // january is 0 in JS

anotherDate.toLocaleString('default', {
    weekday:"narrow",
})