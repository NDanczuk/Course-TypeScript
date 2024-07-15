// 11 - Destructuring

function showProductDetails({name, price}: {name: string, price: number}): string {
    return `The product's name is ${name}, and it costs $${price}`
}

const tshirt = {name: "Deftones tshirt", price: 9.99}

console.log(showProductDetails(tshirt))