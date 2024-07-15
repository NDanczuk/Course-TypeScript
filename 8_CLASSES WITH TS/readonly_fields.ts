// 3 - readonly field

class Car {
    name
    readonly color = "Black"
    readonly madeOf = "Aço"

    constructor(name:string) {
        this.name = name
    }
}

const fuscao = new Car("Fuscão")

console.log(fuscao)