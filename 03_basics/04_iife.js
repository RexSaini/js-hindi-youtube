// Immediately Invoked Function Expression (IIFE)
// to remove the pollution from global scope

(function chai() {
    // named IIFE
    console.log("DB Connected");
})(); // use ; to end the function to avoid syntax error

((name) => {
    console.log(`Hello ${name}`);
})("Groot");