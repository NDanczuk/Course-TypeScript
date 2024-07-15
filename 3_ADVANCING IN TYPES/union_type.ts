// 10 - union type

function showBalance(balance: string | number) {
    console.log(`The account's balance is $${balance}`)
}

showBalance(100)
showBalance("500")

// 11 - advancing in union types

function showUserRole(role: boolean | string) {
    if(typeof role === "boolean") {
        return "User not aproved!"
    }

    return `User's function is: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))