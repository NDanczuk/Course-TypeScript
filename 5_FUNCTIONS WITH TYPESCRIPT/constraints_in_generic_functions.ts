// 4 - Constraints

function biggestNum<T extends number | string>(a: T, b: T): T {
    let biggest: T

    if(+a > +b) {
        biggest = a
    } else {
        biggest = b
    }

    return biggest
}

console.log(biggestNum(5, 3))
console.log(biggestNum("600", "2"))
