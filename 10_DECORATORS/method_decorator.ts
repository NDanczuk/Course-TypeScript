// 4 - method decorator
function enumerable1(value:boolean) {
    return function(
        target:any, 
        propertyKey:string, 
        descriptor:PropertyDescriptor
    ){
        descriptor.enumerable = value
    }
}

class Machine1 {
    name;

    constructor(name:string) {
        this.name = name
    }

    @enumerable1(false)
    showName() {
        console.log(this);
        return `The machine's name is ${this.name}`
    }
}

const motorbike = new Machine1("Motorbike")

motorbike.showName()