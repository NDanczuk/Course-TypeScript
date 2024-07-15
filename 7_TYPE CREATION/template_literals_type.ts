// 9 - Template literals type

type testA = "text"

type CustomType = `some ${testA}`

const testing:CustomType = "some text"
// const testing2:CustomType = "some text 2" - it will only accept an exactly equal text from CustomType

type a1 = "Testing"
type a2 = "Union"

type a3 = `${a1}` | `${a2}`

const testing2:a3 = "Testing"
const testing3:a3 = "Union"
// const testing4:a3 = "Some text" - it will only accept one of the a3 words