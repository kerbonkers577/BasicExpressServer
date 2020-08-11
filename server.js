const express = require('express')
const app = express()
const http = require('http');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors');
let Post = require ('./post_model');

mongoose.connect('mongodb://localhost/Blog',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const dbConn = mongoose.connection;

//Adds Cross Origin Resource Sharing
//Read more about this here: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(cors());

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

//Initialized here as to not force GET headers to expect JSON
app.use(bodyParser.json());

app.post('/add', function (req, res){
    
    const blogPost = new Post({
        title: req.body.title,
        author: req.body.author,
        date: req.body.date,
        content: req.body.content
    });

    blogPost.save((err, blogPost) => {
        if(err)
        {
            res.send("Error saving information");
        }
        else{
            res.send("Blog Post saved")
        }
    })
    
})

//Should probably put the bottom two routes towards an id
// e.g. /delete(or update)/id/
//Will have to do these when posts are accessible on the main application
app.put('/', function (req, res){
    console.log("Update query logged");
})

app.delete('/', function (req, res){
    console.log("Delete query logged");
})

//This hosts an http app through Node's event listeners
app.listen(3000, () => {
    console.log("App connected and listening at PORT 3000 on this machines IPv4 Address");
});