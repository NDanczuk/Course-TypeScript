// 1 - Starting project
console.log("Express + TS!!")

// 2 - init express
import express from 'express'

const app = express()

app.get("/", (erq, res) => {
    return res.send("Hello express!")
})

app.listen(3000, () => {
    console.log("Express app working!")
})