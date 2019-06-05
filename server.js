// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const app = express();
const PORT = process.env.PORT || 3001;
const Grid = require('gridfs-stream');
app.use(logger("dev"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static("public"));
}
require("./app/router/apiRoutes")(app);
require("./app/router/htmlRoutes")(app);
// Database configuration
var databaseUrl = "Test";
var collections = ["photos"];

var conn = mongoose.createConnection(process.env.MONGODB_URI || "mongodb://localhost/photostore");

let gfs
conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});
exports = {conn, gfs}

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
