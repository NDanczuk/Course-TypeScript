// 10 - Rest operator
function addAll(...n: number[]) {
    return n.reduce((number, add) => add + number)
}

console.log(addAll(1, 2, 3, 4, 5))
console.log(addAll(5, 4321, 473289))