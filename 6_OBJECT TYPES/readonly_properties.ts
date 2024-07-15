// 3 - readonly

interface Car {
    brand: string
    readonly wheels: number
}

const fusca:Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca)

//fusca.wheels = 5 - readonly don't allow us to change the property