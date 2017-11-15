// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//DATA
//=============================================================

var charachtersArray = [
  {
    "name":"Mario",
    "photo":"https://supermariorun.com/assets/img/stage/mario03.png",
    "scores":[
        5,
        1,
        4,
        4,
        5
      ]
  },
  {
    "name":"Princess Peach",
    "photo":"https://vignette.wikia.nocookie.net/deathbattlefanon/images/d/de/Princess_Peach_%28Fortune_Street%29.png/revision/latest?cb=20140720001721",
    "scores":[
        5,
        1,
        4,
        4,
        5
      ]
  },
  {
    "name":"Zelda",
    "photo":"http://www.zelda.com/assets/images/centerstage/breath-of-the-wild/icon.png",
    "scores":[
        5,
        1,
        4,
        4,
        5
      ]
  },
  {
    "name":"Twilight Princess",
    "photo":"http://www.thinkgeek.com/images/products/zoom/jonk_twilight_princess_zelda_figma_fig.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5
      ]
  }
];


var matchesArray = [
  {
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
  {
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
  {
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

// app.get("/all", function(req, res) {
//   res.sendFile(path.join(__dirname, "all.html"));
// });

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:characters", function(req, res) {

  return res.json(charachtersArray);

  return res.json(matchesArray);

});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newcharacter = req.body;
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  matchesArray.push(newcharacter);

  res.json(newcharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});