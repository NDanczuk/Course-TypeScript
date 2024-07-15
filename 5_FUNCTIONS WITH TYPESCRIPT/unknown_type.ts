// 8 - unknown

// With an unknown type you always have to validate the data type
function doSomething(x: unknown){
    if(Array.isArray(x)) {
        console.log(x[0])
    } else if(typeof x === "number") {
        console.log(x, " is a number")
    }
}

doSomething([1, 2, 3])
doSomething(5)