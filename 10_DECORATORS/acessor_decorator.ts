// 5 - acessor decorator
// Works with getters and setters

function enumerable(value:boolean) {
    return function(
        target:any, 
        propertyKey:string, 
        descriptor:PropertyDescriptor
    ){
        descriptor.enumerable = value
    }
}

class Monster {
    name?
    age?

    constructor(name:string, age:number) {
        this.name = name
        this.age = age
    }

    @enumerable(true)
    get showName() {
        return `Monster's name: ${this.name}`
    }

    @enumerable(true)
    get showAge() {
        return `Monster's name: ${this.age}`
    }
}

const kanye = new Monster("Kanye West", 430)

console.log(kanye)
