// 3 - Generic function

// We can use this when we can't predict what data type our arg will be

// Generic functions care commonly set with <U> or <T>

function firstElement<T>(arr: T[]): T {
    return arr[0]
}

console.log(firstElement([1, 2, 3]))
console.log(firstElement(["a", "b", "c"]))
console.log(firstElement(["a", 2, false, [100, "Nicolas"]]))

function mergeObjects <U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({name: "Nicolas"}, {age: 19, job: "Programmer"})

console.log(newObject)