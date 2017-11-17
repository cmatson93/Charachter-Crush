var bodyParser = require("body-parser");
var path = require("path");

var charactersArray = require("../data/charachters");
var matchesArray = require("../data/matches");

// Search for Specific Character (or all characters) - provides JSON
module.exports = function(app) {
	app.get("/api/characters", function(req, res) {

	  return res.json(charactersArray);

	});

	app.get("/api/new", function(req, res) {

		return res.json(matched);

	})

	app.get("/api/matches", function(req, res) {

		return res.json(matchesArray);

	})

	var matched;

	// Create New Characters - takes in JSON input
	app.post("/api/new", function(req, res) {

	  var newcharacter = req.body;
	  var scores = JSON.parse(newcharacter.score);
	  console.log(scores);

	  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

	  matchesArray.push(newcharacter);

	  res.json(newcharacter);
	  
	  var lowestDiff = 1000;
	  for (var i = 0; i < charactersArray.length; i++) {
	  	var totalDifference = 0;
	  	 console.log(charactersArray[i].scores);
	  	 for (var s = 0; s < charactersArray[i].scores.length; s++) {
	  	 	if (charactersArray[i].scores[s] > scores[s]) {
	  	 		var difference = charactersArray[i].scores[s] - scores[s];
	  	 		totalDifference += difference;
	  	 		if (totalDifference < lowestDiff) {
	  	 			lowestDiff = totalDifference;
	  	 			matched = charactersArray[i].name;
	  	 		}
	  	 	}
	  	 	else if (charactersArray[i].scores[s] < scores[s]) {
	  	 		difference = scores[s] - charactersArray[i].scores[s];
	  	 		totalDifference += difference;
	  	 		if (totalDifference < lowestDiff) {
	  	 			lowestDiff = totalDifference;
	  	 			matched = charactersArray[i].name;
	  	 		}
	  	 	}
	  	 	else if (charactersArray[i].scores[s] === scores[s]){
	  	 		difference = 0;
	  	 		totalDifference = totalDifference + difference;
	  	 		if (totalDifference < lowestDiff) {
	  	 			lowestDiff = totalDifference;
	  	 			matched = charactersArray[i].name;
	  	 		}
	  	 	}
	  	 }
	  }
	  console.log("lowestDiff: ", lowestDiff);	
	  console.log(matched);
	  return matched;

	});
};


