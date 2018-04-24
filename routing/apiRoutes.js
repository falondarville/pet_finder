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
	var differenceArray =[];

	var difference = function (a, b) { 
		return Math.abs(a - b);
	};

	for(var j = 0; j < friends.length; j++){
		var friend = friends[j];
		var friendScore = friends[j].scores;
		var differenceBetween = 0;

		for(var i = 0; i < friendScore.length; i++){
			differenceBetween += difference(friendScore[i], scores[i]);
		}
		console.log(differenceBetween);
		friends[j].differenceBetween = differenceBetween;
		
		differenceArray.push(differenceBetween);

	}
	console.log(friends);
	var bestDifference = Math.min(...differenceArray);

	for(var r = 0; r < friends.length; r++){
		if(friends[r].differenceBetween == bestDifference){
			bestMatch = friends[r];
			break;
		}
	}
	return response.json(bestMatch);
});

module.exports = router;