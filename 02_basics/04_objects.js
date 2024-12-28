// let tinderUser = new Object()

let tinderUser ={}
tinderUser.id = "123"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

console.log(tinderUser);


let regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userName: { 
            first_name: "abc",
            last_name: "xyz"
        }
    }
}

console.log(regularUser.fullname.userName.first_name);

let obj1 = {1: "a", 2: "b"}
let obj2 = {3: "c"}

let obj3 = {...obj1, ...obj2}
let obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);


let users = [
    {
        id:1,
        email: "a@gmail.com"
    },
    {
        id:2,
        email: "b@gmail.com"
    },
]

console.log(users[1].email);

console.log(Object.keys(tinderUser)); // returns an array of keys
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogged"));

let course = {
    name: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course // destructuring of objects

console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"

// }

[
    {},
    {},
    {},
]