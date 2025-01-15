const coding = ["js", "rb", "java", "py", "cpp"]

// coding.forEach(function (element) {
//     console.log(element);
// }
// )

function printMe(item) {
    console.log(item);
}

// coding.forEach(printMe)

coding.forEach(element => {
    console.log(element);
});

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);   
})

let myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})