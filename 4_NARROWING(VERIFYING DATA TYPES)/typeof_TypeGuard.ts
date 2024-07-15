// 1 - type guard

// First type of narrowing is identifying the data types and telling the program how to proceed it the data type is wrong

function add(a: number | string, b: number | string) {
    if(typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b))
    } else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b)
    } else {
        console.log("Unable to add!")
    }
}

add("4", "56")
add(100, 150)
add("4", 6)