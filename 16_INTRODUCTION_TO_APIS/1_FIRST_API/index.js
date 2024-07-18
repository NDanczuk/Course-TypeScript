const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extend: true
    })
)

app.use(express.json())

// Routes - endpoints
app.get('/', (req, res) => {

    res.json({message: "First route created succsessfully!"})

})

app.listen(3000)