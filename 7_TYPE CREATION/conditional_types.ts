// 8 - Conditional expression type

interface A {}

interface B extends A{}

type myType = B extends A ? number : string

const someVar:myType = 5
// const someVar2:myType = "Nicolas" - it only accepts number

interface Test {
    ShowName():string
}

type myType2 = Test extends {showNumber():number} ? string : boolean