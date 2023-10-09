const express = require('express')
const app =  express()
const path = require('path')
const port = process.env.PORT || 80
const DBCONNECTION = process.env.DBCONNECTION

const mongoose = require('mongoose')
const cors = require('cors')

const studentRoute = require('./routes/student')
const postRoute = require('./routes/post')
const commentRoute = require('./routes/comment')

// app.use(express.static("./client/build"))
// app.use('/',express.static(path.join(__dirname, 'client', 'build', "index.html")));
app.use(express.static('client/build'));
app.use(express.json());
app.use(cors())
// app.get('/', (req, res) => {
//     res.send('home page accessed')
// })

app.use('/', (studentRoute))
app.use('/post', (postRoute))
app.use('/comment', (commentRoute))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
});

// app.post('/login', (req, res) => {
//     const username = req.body.username
//     const password = req.body.password

//     res.json({username, password})
// })

// app.get("/", (res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });

// app.listen(port, () => {
//     console.log('server running')
// })

mongoose.connect(DBCONNECTION)
.then(() => {app.listen((port), console.log (`Server running on port ${port}`))})
.catch((error) => console.log(error.message))