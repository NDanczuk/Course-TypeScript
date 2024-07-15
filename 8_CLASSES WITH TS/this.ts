// 6 - This

class MyTruck{
    brand
    hp

    constructor(brand:string, hp:number) {
        this.brand = brand
        this.hp = hp
    }

    showDetails() {
        console.log(`The truck's brand is ${this.brand}, and it has ${this.hp} Horse Power`)
    }
}

const volvo = new MyTruck("Volvo", 750)

volvo.showDetails()