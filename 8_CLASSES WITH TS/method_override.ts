// 10 - Method override

class Base {
    someMethod() {
        console.log("Something")
    }
}

class New extends Base {
    someMethod() {
        console.log("Another something")
    }
}

const myObject = new New()

myObject.someMethod()