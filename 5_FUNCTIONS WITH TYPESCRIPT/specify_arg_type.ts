// 5 - Specify argument type

function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2)

}

// By adding <number | string> we tell the generic function to accept both data types
console.log(mergeArrays<number | string>([1, 2, 3], ["test", "testing"]))