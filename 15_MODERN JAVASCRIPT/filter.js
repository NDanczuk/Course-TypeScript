// 3 - filter

const arr = [1, 2, 3, 4, 5]

const highNumbers = arr.filter((n) => {
    if( n>=3 ) {
        return n
    }
})

// The array data is filtered, without changing the array
console.log(arr)
console.log(highNumbers)

const users = [{name: "Nicolas", avaliable: true}, 
    {name: "Paulo", avaliable: false}, 
    {name: "Maria", avaliable: true}, 
    {name: "Pedro", avaliable: false}, 
    {name: "Amanda", avaliable: false}, 
    {name: "Jonas", avaliable: true},
]

const avaliableUsers = users.filter((users) => users.avaliable)
const notAvaliableUsers = users.filter((users) => !users.avaliable)

console.log(avaliableUsers)
console.log(notAvaliableUsers)