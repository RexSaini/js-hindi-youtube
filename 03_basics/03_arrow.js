const user = {
    username: "abc",
    price: 999,

    welcomeMesage: function() { 
        console.log(`${this.username}, welcome to the website`); 
        console.log(this);
         
    }
}

user.welcomeMesage()
user.username = "Sam"
user.welcomeMesage()

console.log(this);

function chai() {
    let username = "xyz"
    console.log(this.username);
}

chai()

const tea = () => {
    let username = "xyz"
    console.log(this);
}

tea()

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(4, 7));

const addNum = (num1, num2) => (num1 + num2) // implicit return of arrow function

console.log(addNum(7, 9));

const add = () => ({}) // warp object in parentheses

