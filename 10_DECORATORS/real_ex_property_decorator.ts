// 9 - Property decorator real example
function Max(limit:number) {

    return function(target:Object, propertyKey:string) {

        let value:string

        const getter = function() {
            return value
        }

        const setter = function(newVal:string) {
            if(newVal.length > limit) {
                console.log(`The value must be max. ${limit} digits.`)
                return
            } else {
                value = newVal
            }
        }

        Object.defineProperty(target, propertyKey, {
            get:getter,
            set:setter
        })
    }
}

class Admin {
    @Max(10)
    userName

    constructor(userName:string) {
        this.userName = userName
    }
}

let nicolas2 = new Admin("Nicolas")

