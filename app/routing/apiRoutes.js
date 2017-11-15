// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:characters", function(req, res) {

  return res.json(charactersArray);

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

