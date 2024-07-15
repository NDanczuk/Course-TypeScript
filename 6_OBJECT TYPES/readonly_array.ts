// 7 - readonly arrays

let myArray: ReadonlyArray<string> = ["Apple", "Orange", "Banana"]

// myArray[3] = "Mamão" - with readonly we can't add more data to the array

console.log(myArray)

myArray.forEach((item) => {
    console.log("Fuit: " + item)
})


// The only modification we can do to the array is through map
myArray = myArray.map((item) => {
    return `Fruit: ${item}`
})

console.log(myArray)