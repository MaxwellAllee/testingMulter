// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var logger = require("morgan");
var app = express();
const routes = require("./app/router");

app.use(logger("dev"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Database configuration
var databaseUrl = "Test";
var collections = ["photos"];

// Hook mongojs config to db variable
var db = mongojs(databaseUrl, collections);

// Log any mongojs errors to console
db.on("error", function(error) {
  console.log("Database Error:", error);
});


// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
