// 4 - Map

const products = [
    {name: "T-shirt", price: 9.99, category: "Clothes"},
    {name: "Electric kettle", price: 149.99, category: "House"},
    {name: "Stove", price: 499.99, category: "House"},
    {name: "Pants", price: 19.99, category: "Clothes"},
]

products.map((product) => {
    if(product.category === "Clothes"){
        product.onSale = true
    }
})

console.log(products)