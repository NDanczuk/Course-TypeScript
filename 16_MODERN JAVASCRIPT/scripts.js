// 1 - var, let and const

var x = 10
var y = 15


// Here the x value is changed
if (y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)


let a = 10
let b = 15


// Here the a value is only changed inside the condition
if (b > 10) {
    let a = 5
    console.log(a)
}

console.log(a)



function logName() {
    const name = 'Nicolas'
    console.log(name)
}

const name = 'Pedro'

logName(name)

console.log(name)