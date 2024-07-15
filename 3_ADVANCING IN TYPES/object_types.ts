// 7 - Object types

function passCoordinates(coord: {x: number, y: number}) {
    console.log("X coordinates: " + coord.x)
    console.log("Y coordinates: " + coord.y)
}

const objCoord = {x: 349, y: 84.2}

passCoordinates(objCoord)