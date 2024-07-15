// 9 - implements

interface showTitle {
    itemTitle():string
}

class blogPost implements showTitle {
    title

    constructor(title:string) {
        this.title = title
    }

    itemTitle() {
        return`The post's title is: ${this.title}`
    }
}

const myPost = new blogPost("Hello world")

console.log(myPost.itemTitle())

class TestingInterface implements showTitle {
    title

    constructor(title:string) {
        this.title = title
    }

    itemTitle() {
        return`The title is: ${this.title}`
    }
}