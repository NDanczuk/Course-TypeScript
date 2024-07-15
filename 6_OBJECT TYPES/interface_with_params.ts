// 1 - object types to function with interface

interface Product {
    name: string
    price: number
    isAvaliable: boolean
}

function showProductDetails(product: Product) {
    console.log(`The product's name is ${product.name}, and it's price is $${product.price}`)
    if (product.isAvaliable) {
        console.log("The product is avaliable!")
    } else {
        console.log("The product isn't avaliable")
    }
}

const shirt:Product = {
    name: "Deftones tshirt",
    price: 19.99,
    isAvaliable: true
}

showProductDetails(shirt)
showProductDetails({name: "Shoes", price: 49.99, isAvaliable: false})