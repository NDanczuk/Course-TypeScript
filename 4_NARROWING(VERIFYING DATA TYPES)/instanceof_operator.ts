// 3 - instance of

class User {
    name

    constructor(name: string){
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name)
    }
}

const jhon = new User("Jhon")
const paul = new SuperUser("Paul")

console.log(jhon)
console.log(paul)

function userGreeting(user: object) {
    if(user instanceof SuperUser) {
        console.log(`Hello ${user.name}, do you wish to see system data?`)
    } else if (user instanceof User) {
        console.log(`Hello ${user.name}`)
    }

}

userGreeting(jhon)
userGreeting(paul)