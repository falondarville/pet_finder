const express = require('express');
const path = require('path');

const router = express.Router();
const friends = require(path.join(__dirname, '..', 'data', 'friends'));

// get route that displays JSON of all possible pets
router.get('/friends', function(request, response){
	return response.json(friends);
});

// post route that handles incoming survey results
// this route handles compatibility logic
router.post('/friends', function(request, response){
	var name = request.body.name;
	var scores = request.body.scores;
	var bestMatch = {};

	for(var i = 0; i < friends.length; i++){
		console.log(friends[i]);

	};

	return response.json(bestMatch);
	// var a = friends array from friends.js
	// var b = array compiled through the quiz taken by the user
	// calculate compatibility here to the friends.js file
	// var difference = function (a, b) { 
	// 	return Math.abs(a - b);
	// };
});

module.exports = router;