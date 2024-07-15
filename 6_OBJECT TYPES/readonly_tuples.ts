// 9 - readonly tuples

function showNumbers(numbers: readonly [number, number]) {
    // numbers[0] = 10 - we can change the properties because is set as readonly
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([1, 2])