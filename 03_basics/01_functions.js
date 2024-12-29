function sayMyName(){
    console.log("abc"); 
}

sayMyName()

function addition(num1, num2){
    let sum = num1+num2
    console.log(`The sum is ${sum}`);
}

let result1 = addition(6, 7.9)

console.log(result1); // undefined because we have no return value in function

function multiplication(num1, num2){
    return num1 * num2
    console.log("Hello"); // the code after return will not be executed
}

let result2 = multiplication(8, 7)
console.log(`The product of is ${result2}`);

function loginUserMessage(username){
    if (!username) {
        console.log("Please enter username"); 
        return
    }
    return`${username} just logged in`
}

console.log(loginUserMessage("xyz"))
console.log(loginUserMessage())

function calculateCartPrice(...price){ // rest operator if we do not know the number of parameters
    return price
}

console.log(calculateCartPrice(200, 300, 400, 500));

let user = {
    username: "abc",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)
handleObject({
    username: "xyz",
    price: 399
})

let myArray = [200, 400, 100, 500]

function returnSecondValue(anyArray){
    return anyArray[1]
}

console.log(returnSecondValue(myArray));
