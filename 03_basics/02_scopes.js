let a = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30 // its scope global
    console.log("Inner: ", a);
    
}

console.log(c);
console.log(a);


function one(){
    const username = "abcde"
    function two() {
        const website = "youtube"
        console.log(username); // can be accessed
    }
    // console.log(website); // can not be accessed

    two()
}

one()

if (true) {
    const username = "pqrst"
    if (true) {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); // can not be accessed
}

// console.log(username); // can not be accessed


// +++++++++++++ interesting ++++++++++++++++++++

function addOne(num) {
    return num + 1
}
console.log(addOne(5))


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))
