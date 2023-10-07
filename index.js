const express = require('express')
const app =  express()
const port = process.env.PORT || 80

app.get('/', (req, res) => {
    res.send('home page accessed')
})

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    res.json({username, password})
})

app.listen(port, () => {
    console.log('server running')
})