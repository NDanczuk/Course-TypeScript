// 13 - Interface introduction

interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj:Point= {
    x: 10,
    y: 15,
    z: 40
}

showCoords(coordObj)