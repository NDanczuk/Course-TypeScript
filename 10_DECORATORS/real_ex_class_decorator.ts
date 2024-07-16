// 7 - Class decorator real example
function createDate(created:Function) {
    created.prototype.createdAt = new Date()
}

@createDate
class Book {
    id

    constructor(id:number) {
        this.id = id
    }
}

@createDate
class Pencil {
    id

    constructor(id:number) {
        this.id = id
    }
}

const newBook = new Book(12)
const newPencil = new Pencil(70)

console.log(newBook)
console.log(newPencil)