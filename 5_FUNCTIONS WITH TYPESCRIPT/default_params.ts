// 7 - default parameters

function addDefault(n: number, m = 10): number {
    return n+m
}

console.log(addDefault(5))
console.log(addDefault(15, 15))