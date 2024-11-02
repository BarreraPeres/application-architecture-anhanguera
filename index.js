import express from 'express'

const app = express()

app.get("/Hello", (req, res) => {
    res.send("Realizei de forma completa atividade solicitada... 🦊")
})

app.listen(3333, () => {
    console.log("Server no Ar")
}) 