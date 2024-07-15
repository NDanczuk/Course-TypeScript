// 4 - Index signature

interface CoordObj {
    [index: string]: number
}

let coords: CoordObj = {
    // x: "test" - Does not accept a string as value
    x: 10
}

coords.y = 15

console.log(coords)