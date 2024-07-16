// 17 - Class expressions

const myClass = class<T> {
    name

    constructor(name:T) {
        this.name = name
    }
}

const pessoa = new myClass("Nicolas")

console.log(pessoa)