// 1 - generics
function showData<T>(arg: T): string {
    return `The data is: ${arg}`
}

console.log(showData(5))
console.log(showData("Testing the generic"))
console.log(showData(true))
console.log(showData(["Test"]))