const accountId = 144553 
let accountEmail = "nothanks@gmail.com" 
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2 // not allowed
accountEmail = "thank@gmail.com"
accountPassword = "22222"
accountCity = "Delhi"

/*
Prefer not to use var because of issue in block 
and functional scope
*/


console.log(accountId);
console.table([accountId, accountEmail,accountPassword, accountCity, accountState])

