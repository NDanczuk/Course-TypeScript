// 8 - Optional properties

// By adding a ? to the propertie, it becomes optional

function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a)
    console.log("B: " + b)
    if(c) {
        console.log("C: " + c)
    }    
}

showNumbers(1, 2, 3)

showNumbers(4, 5)

// 9 - Optional parameter validation
function advancedGreeting(firstName: string, lastName?: string) {

    if(lastName !== undefined) {
        return `Hello, ${firstName} ${lastName}, how are you?`
    }

    return `Hello, ${firstName}, how are you?`
}

console.log(advancedGreeting("Nicolas", "Danczuk"))
console.log(advancedGreeting("Zezin"))