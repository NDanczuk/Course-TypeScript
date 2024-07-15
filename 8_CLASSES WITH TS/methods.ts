// 5 - Methods

class Dwarf {
    name

    constructor(name:string) {
        this.name = name
    }

    greeting() {
        console.log("Hey stranger!")
    }
}

const gimli = new Dwarf("Gimli")

console.log(gimli.name)

gimli.greeting()