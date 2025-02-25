const coding = ["js", "rb", "java", "py", "cpp"]

const values = coding.forEach((item)=>{
    console.log(item);
    // return item // it does not return any value
})

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => num > 4)
const newNums = myNums.filter((num) => {
    return num > 4
})

console.log(newNums);

