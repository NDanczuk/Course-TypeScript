// 8 - Classes

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const tshirt = new Product("Deftones tshirt", 80)

console.log(tshirt.name)

console.log(tshirt.productWithDiscount(10))

console.log(tshirt.productWithDiscount(50))

console.log(tshirt.productWithDiscount(90))

const shoes = new Product("Vans Half Cab", 600)

console.log(shoes.productWithDiscount(35))


// 9 - Heritage

class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log("The colors are: ")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes("Fedora", 300, ["Black", "Blue", "Red"])

console.log(hat.name)

console.log(hat.productWithDiscount(30))

hat.showColors()


