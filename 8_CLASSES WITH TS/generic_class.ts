// 15 - Generic class

class Item<T, U>{
    first
    second

    constructor(first:T, second:U) {
        this.first = first
        this.second = second
    }

    get showFirst() {
        return `First is: ${this.first}`
    }
}

const newItem = new Item("surprise", "box")
console.log(newItem.showFirst)

const secondItem = new Item(1, 2)
console.log(secondItem.showFirst)