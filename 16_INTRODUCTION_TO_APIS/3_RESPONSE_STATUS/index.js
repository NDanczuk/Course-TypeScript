const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extend: true
    })
)

app.use(express.json())

// Routes - endpoints
app.post('/createproduct', (req, res) => {

    const name = req.body.name
    const price = req.body.price

    if(!name){
        res.status(422).json({message: "The field name is mandatory!"})
        return
    }

    console.log(name)
    console.log(price)

    res.status(201).json({message: `The product ${name} was created succsessfully!`})
})

app.get('/', (req, res) => {

    res.status(200).json({message: "First route created succsessfully!"})

})

app.listen(3000)