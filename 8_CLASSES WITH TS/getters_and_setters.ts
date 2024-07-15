// 7 - getters

class Person {
    name
    surname

    constructor(name:string, surname:string) {
        this.name = name
        this.surname = surname
    }

    get fullName() {
        return this.name + " " + this.surname
    }
}

const nicolasDanczuk = new Person("Nicolas", "Danczuk")

// getter use:

console.log(nicolasDanczuk.fullName)

// 8 - setters

class Coords {
    x!:number
    y!:number

    set fillx(x:number) {
        if(x === 0) {
            return
        }

        this.x = x

        console.log("X inserted succsessfully")
    }

    set filly(y:number) {
        if(y === 0) {
            return
        }

        this.y = y

        console.log("Y inserted succsessfully")
    }

    get getCoords() {
        return `X: ${this.x} & Y: ${this.y}`
    }
}

const myCoords = new Coords()

myCoords.fillx = 15
myCoords.filly = 10

console.log(myCoords)
console.log(myCoords.getCoords)