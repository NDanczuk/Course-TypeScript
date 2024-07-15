// 14 - interface X type alias

interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: "Nicolas", age: 19}

console.log(somePerson)



type personType = {
    name: string
}