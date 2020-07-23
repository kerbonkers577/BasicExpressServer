const express = require('express')
const app = express()
const mongoose = require('mongoose')
let Post = require ('./post_model');

mongoose.connect('mongodb://localhost/Blog',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const dbConn = mongoose.connection;

app.get('/', function (req, res){
    //Return all posts as a test
    Post.find(function (err, posts){
        if(err)
        {
            res.send(err)
        }
        else{
            res.json(posts);
        }
    })
    
})

app.listen(3000);