var express = require("express");
var mongoose = require("mongoose");

var app = express();
var port = 9000;

// Database Connection String
var uri = "mongodb+srv://theo123:theo1234@ovp-jowv1.mongodb.net/test?retryWrites=true&w=majority";


// Connects to the localhost:9000 and enstablishing a database connection
var server = app.listen(port, function() {
    // Connect to Mongoose.
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then((test) => {
        console.log("Connected to DB");
    });
    
    // Some output for the interested reader...
    console.log("Listening on " + port);
})