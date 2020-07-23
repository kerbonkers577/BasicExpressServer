const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/posts',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const dbConn = mongoose.mongoose.connection;

app.get('/', function (req, res){
    res.send('Hello World')
    
})

app.listen(3000);