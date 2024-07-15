// 5 - Extending types

interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const nicolas: Human = {
    name: "Nicolas",
    age: 19
}

const homelander: SuperHuman = {
    name: "Homelander",
    age: 35,
    superpowers: ["Flying", "strenght", "laser beam"]
}

console.log(nicolas)
console.log(homelander)
console.log(homelander.superpowers)