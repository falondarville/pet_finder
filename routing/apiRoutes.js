const express = require('express');
const path = require('path');

const router = express.Router();
const friends = require(path.join(__dirname, '..', 'data', 'friends'));

// get route that displays JSON of all possible pets
router.get('/friends', function(request, response){
	return response.json(friends);
});

// post route that handles incoming survey results and compatibility logic
router.post('/friends', function(request, response){
	var name = request.body.name;
	var scores = request.body.scores;
	var bestMatch = {};

	// for(var i = 0; i < scores.length; i++) {
	// 	scores[i] = parseInt(scores[i]);
	// }

	// var difference = function (a, b) { 
	// 	return Math.abs(a - b);
	// };

	// for(var i = 0; i < friends.length; i++){

	// 	var result = difference(friends[i].scores, scores);
	// 	console.log(result);
	// };

	return response.json(bestMatch);
});

module.exports = router;