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

    console.log(name)
    console.log(price)

    res.json({message: `The product ${name} was created succsessfully!`})
})

app.listen(3000)