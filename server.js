var express = require("express");

var app = express();
var port = 9000;

// Connects to the localhost:9000 and enstablishing a database connection
var server = app.listen(port, function() {

    // Some output for the interested reader...
    console.log("Listening on " + port);
})