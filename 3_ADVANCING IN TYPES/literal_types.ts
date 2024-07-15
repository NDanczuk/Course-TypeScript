// 15 - literal types

let test: "Testing"

test = "Testing"

console.log(test)

function showDirection(direction: "left" | "right" | "center") {
    console.log(`The direction is: ${direction}`)
}

showDirection("left")

// showDirection("top")