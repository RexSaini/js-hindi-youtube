// singleton
// Object.create

// oject literals

let mySymbol = Symbol("key1")

let JsUser = {
    name: "abc",
    "last_name": "xyz",
    [mySymbol]: "mykey1", // to use it like a symbol
    age: 20,
    location: "India",
    email: "abc@email.com",
    isLoggedIn: false,
    logInDays: ["monday", "saturday"]
}

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["last_name"]);
console.log(JsUser[mySymbol]);

JsUser.email = "abc@openai.com" 
// Object.freeze(JsUser) 
JsUser.email = "abc@google.com" 

console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hello User");
}

JsUser.greeting2 = function(){
    console.log(`Hello User, ${this.name}`); 
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
