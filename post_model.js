const mongoose = require('mongoose');

//This is just a schema, not a model
//defines how a model is constructed
const PostSchema = new mongoose.Schema({
    title: String,
    author: String,
    date: String,
    content: String
});

//A model is a class that is built up of a schema allowing for
//abstract methods to be applied to the model regardless
//of the underlying schema
module.exports = mongoose.model('Post', PostSchema);