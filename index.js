const express = require('express')
const app =  express()
const port = process.env.PORT || 80

app.use(express.static("./client/build"))
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('home page accessed')
// })

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    res.json({username, password})
})

app.get("/", (res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
    console.log('server running')
})