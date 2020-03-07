// API routing
var express = require("express");
var path = require("path");
var friendList = require('../data/friends');

module.exports = function(app){
app.get("/api/friends", function(req, res) {
  res.json(friendList);
});

app.post("/api/friends", function(req, res) {
  var newFriend = req.body;

  console.log(newFriend);

  friendList.push(newFriend);

  res.json(newFriend);
});
}