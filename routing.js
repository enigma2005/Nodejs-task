const express = require('express')
const app = express()
const port = 8080

app.get('/number', function(req, res) {
    res.send('“Go to /number/:num to check if :num is odd or even')
})

app.get('/number/:num', function(req, res) {
    number = req.params.num
    if (number % 2 == 0)
        res.send(`The number ${number} is even`)
    else
        res.send(`The number ${number} is odd`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})