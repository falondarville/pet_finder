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
	var newResults = request.body.friends;
	console.log(newResults);
});

module.exports = router;