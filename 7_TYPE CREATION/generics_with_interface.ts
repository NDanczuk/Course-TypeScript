// 3 - generics with interface

interface MyObject<T, U, Q> {
    name: string
    wheels: T
    engine: U
    color: Q
}

type Car2 = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar:Car2 = {name: "Fusca", wheels: 4, engine: 1.0, color: "Black"}
const myPen:Pen = {name: "BIC Pen", wheels: false, engine: false, color: "Blue"}

console.log(myCar)
console.log(myPen)