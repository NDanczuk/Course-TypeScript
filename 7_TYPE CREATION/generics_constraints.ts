// 2 - Constraints in generics
function showProductName<T extends {name: string}>(obj: T) {
    return `The product's name is ${obj.name}`
}

const myObj = {name: "Door", color:"White"}
const secondObj = {name: "Car", wheels: 4, engine: 1.0}
const thirdObj = {price: 19.99}

console.log(showProductName(myObj))
console.log(showProductName(secondObj))
// console.log(showProductName(thirdObj)) - this object does not have a name parameter, so it can't be used in the function