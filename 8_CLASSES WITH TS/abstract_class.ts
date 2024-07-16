// 18 - abstract class

abstract class AbstractClass{
    abstract showName():void;
}

// const newObj = new AbstractClass(); - we can not create an instance of an abstract class

class AbstractExample extends AbstractClass {
    name:string;

    constructor(name:string) {
        super();
        this.name = name;
    }

    showName() {
        console.log(`The name is: ${this.name}`)
    }
}

const newAbstractObject = new AbstractExample("Jorge Prego")

newAbstractObject.showName();