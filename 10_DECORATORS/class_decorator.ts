// 3 - class decorator
function clasDec(constructor:Function) {
    console.log(constructor);
    if(constructor.name === "User1") {
        console.log("Creating new user")
    }
}

@clasDec
class User1 {
    name;

    constructor(name:string) {
        this.name = name;
    }
}

const nico = new User1("Nicolas")

console.log(nico)