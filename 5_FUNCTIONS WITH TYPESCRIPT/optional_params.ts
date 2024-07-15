// 6 - Optional params

function modernGreeting(name: string, greet?: string) {
    if(greet) {
        return `Hello ${greet} ${name}, how are you today?`
    }

    return `Hello ${name}!`
}

console.log(modernGreeting("Nicolas"))
console.log(modernGreeting("Nicolas", "Mr."))