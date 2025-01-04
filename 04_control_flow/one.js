// if 

// === strict equal for type checking

let isLoggedIn = true

if (isLoggedIn) {
    console.log("Executed");
    
} else {

}

let balance = 1000

if (balance > 500) console.log("Test"); // implicit scope

if (balance < 500) {
   console.log("Less than 500");
} else if (balance < 750) {
    console.log("Less than 750");
} else if (balance < 900) {
    console.log("Less than 900");
} else {
    console.log("Less than 1200");
}

let debitCard = true
let loggedInFromGoogle = false
let loggedInFromGmail = true

if (isLoggedIn  && debitCard) {
    console.log("Allowed to buy");
}

if (loggedInFromGmail || loggedInFromGoogle) {
    console.log("Uers logged in");
}