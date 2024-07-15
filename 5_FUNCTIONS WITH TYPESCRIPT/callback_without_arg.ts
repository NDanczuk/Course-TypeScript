// 2 - Callback without argument

function greeting(name: string) {
    return `Hello ${name}`
}

function preGreeting(f: (name: string) => string, userName: string) {

    console.log("Preparing the function!")

    const greet = f(userName)

    console.log(greet)

}

preGreeting(greeting, "Nicolas")