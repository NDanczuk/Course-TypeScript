// Heritage and super

class Machine {
    name

    constructor(name:string) {
        this.name = name
    }
}

const truck = new Machine("Truck")

class KillerMachine extends Machine {
    guns

    constructor(name:string, guns:number) {
        super(name)
        this.guns = guns
    }
}

const tank = new KillerMachine("Tank", 4)

console.log(truck)
console.log(tank)