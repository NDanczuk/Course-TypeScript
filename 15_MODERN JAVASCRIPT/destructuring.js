// 6 - Destructuring

const fruits = ["Apple", "Orange", "Watermelon"]

const [f1, f2, f3] = fruits

console.log(f3)

const productDetails = {
    name: "Notebook",
    price: 399.99,
    category: "Computer",
    color: "Grey"
}

const {name: productName, price, category: productCategory, color} = productDetails

console.log(`The product's name is ${productName}, it costs $${price}, it belongs to ${productCategory}'s category, and it's color is ${color}`)