// 6 - property decorator
function formatNumber() {
    return function(target:Object, propertyKey:string) {
        let value:string

        const getter = function() {
            return value
        }

        const setter = function(newVal:string) {
            value = newVal.padStart(5, "0")
        }
    

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        })
    }
}

class ID1 {
    @formatNumber()
    id

    constructor(id:string) {
        this.id = id
    }
}

const newItem1 = new ID1("1")

console.log(newItem1.id)