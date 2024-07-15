// 4 - operator in

class Dog {
    name
    breed

    constructor(name: string, breed?: string) {
        this.name = name

        if(breed) {
            this.breed = breed
        }
    }
}

const bob = new Dog("Bob", "German shepherd")
const feijaozinho = new Dog("Feijãozinho")

function showDogDetails(dog: Dog) {

    if('breed' in dog) {
        console.log(`The dog is a ${dog.breed}`)
    } else {
        console.log("The dog doesn't have a breed")
    }
}

showDogDetails(bob)
showDogDetails(feijaozinho)