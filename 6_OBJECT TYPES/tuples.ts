// 8 - tuples

// tuple is an array type, but we have to define the amount and element type

type fiveNumbers = [number, number, number, number, number]

const myNumberArray:fiveNumbers = [1, 2, 3, 4, 5]


// If the array does not follow the tuple patern it will be marked as wrong
//const myNumberArray2: fiveNumbers = [1, 2, "Hell0", true, 5]
//const myNumberArray3: fiveNumbers = [1, 2, 3]
//const myNumberArray3: fiveNumbers = [1, 2, 3, 4, 5, 6]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser:nameAndAge = ["Nicolas", 19]

console.log(anotherUser)

// This makes our arrays more restrict