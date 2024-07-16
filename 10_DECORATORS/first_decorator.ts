/*
- Let's create a decorator with a function
- It can work with special args, such as target, propertyKey and descriptor
- This special args give us information about where the decorator was executed
*/

// 1 - Decorator example
function myDecorator() {
    console.log("Initializing decorator!")

    return function(
        target:any, 
        propertyKey:string, 
        descriptor:PropertyDescriptor
    ) {

        console.log("Executing decorator")
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);

    }
}

class myClass1 {
    @myDecorator()
    testing() {
        console.log("Finishing method's execution")
    }
}

const myObj1 = new myClass1()

myObj1.testing()

