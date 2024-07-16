// 8 - Method decorator real example
function checkIfUserPosted() {
    return function(
        target:Object, 
        key:string | Symbol, 
        descriptor: PropertyDescriptor
    ) {
        const childFunction = descriptor.value
        console.log(childFunction)
        descriptor.value = function(...args:any[]) {
            if(args[1] === true) {
                console.log("User already posted")
                return null
            } else {
                return childFunction.apply(this, args)
            }
        }

        return descriptor
    }
}


class Post {
    alreadyPosted = false

    @checkIfUserPosted()
    post(content:string, alreadyPosted:boolean) {
        this.alreadyPosted = true
        console.log(`User's post: ${content}`)
    }
}

const newPost = new Post()

newPost.post("My first post", newPost.alreadyPosted)

newPost.post("My second post", newPost.alreadyPosted)