// 2 - multiple decorators
// Always the lower decorator will be executed first

function b() {
    return function(
        target:any, 
        propertyKey:string, 
        descriptor:PropertyDescriptor
    ) {
        console.log("Executed b.")
    }
}

function c() {
    return function(
        target:any, 
        propertyKey:string, 
        descriptor:PropertyDescriptor
    ) {
        console.log("Executed c.")
    }
}

class MultipleDecorators {
    @b()
    @c()
    testing() {
        console.log("Finishing execution")
    }
}

const multiDecorators = new MultipleDecorators()

multiDecorators.testing()