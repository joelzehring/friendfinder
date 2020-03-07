// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);
var friendList = require('./app/data/friends');

console.log(friendList);

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listenting on PORT " + PORT);
});