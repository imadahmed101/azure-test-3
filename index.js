const express = require('express')
const app =  express()
const port = process.env.PORT || 80

app.get('/', (req, res) => {
    res.send('home page accessed')
})

app.listen(port, () => {
    console.log('server running')
})