import express from 'express'

const app = express()

app.get("/Hello", (req, res) => {
    res.send("hello world! 🦊")
})

app.listen(3333, () => {
    console.log("Server no Ar")
}) 