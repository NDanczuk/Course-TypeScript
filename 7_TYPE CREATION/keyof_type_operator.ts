// 5 - keyoff type operator

type Character2 = {name: string, age: number, hasDriverLicence: boolean}

type C = keyof Character2

function showCharName(obj: Character2, key: C):string {
    return `${obj[key]}`
}

const myChar: Character2 = {
    name: "Nicolas",
    age: 19,
    hasDriverLicence: true
}

console.log(showCharName(myChar, "name"))
console.log(showCharName(myChar, "age"))
console.log(showCharName(myChar, "hasDriverLicence"))