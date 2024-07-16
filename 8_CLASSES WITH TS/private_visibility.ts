// 13 - private 

class Private{
    private name:string = "Private"

    showName() {
        return this.name
    }

    private privateMethod() {
        console.log("Private method")
    }

    showPrivateMethod() {
        this.privateMethod()
    }
}

const pObj = new Private()

console.log(pObj.showName)

pObj.showPrivateMethod()

class TestingPrivate extends Private {
    myMethod() {
        /// this.privateMethod() - This method is private, it can only be accessed on the class Private
    }
}