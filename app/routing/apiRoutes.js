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
  var bestFriend = {};
  var matchScore = 1000;
  
  // Loop through list of friends
  for (var i of friendList) {
    var diffScore = 0;
    // Loop through the scores
    for (var j = 0; j < newFriend.scores.length; j++) {
      var rawDiffer = newFriend.scores[j] - i.scores[j];
      diffScore += Math.abs(rawDiffer);
    }
    console.log(i.name + ": " + diffScore);
    if (diffScore < matchScore) {
      bestFriend = i;
      matchScore = diffScore;
    }
  }

  res.json(bestFriend);
});
}