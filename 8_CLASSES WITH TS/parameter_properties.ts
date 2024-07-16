// 16 - Parameter proeprties

class ParameterProperties {
    constructor (public name:string, 
        private qt:number, 
        private price:number
    ) {
        this.name = name
        this.qt = qt
        this.price = price
    }

    get showQt() {
        return `Total tshirts: ${this.qt}`
    }

    get showPrice() {
        return `Price: ${this.price}`
    }
}

const newShirt = new ParameterProperties("Deftones tshirt", 5, 59.99)

console.log(newShirt.name)
// console.log(newShirt.price) - We can't access private properties

console.log(newShirt.showQt)
console.log(newShirt.showPrice)