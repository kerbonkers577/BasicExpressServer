# BasicExpressServer
<h1> This is just some server that serves as an API endpoint to allow CRUD on a MongoDB databases </h1>

Run npm install for all the npm package stuff.

JSON is returned for GET requests
Structure for a post is:
 
[
 {
    title: String,
    author: String,
    date: Date,
    content: String
 },
]

These are just types permitted by MongoDb. Used Mongoose to access it.
