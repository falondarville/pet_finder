const express = require('express');
const path = require('path');

const router = express.Router();

console.log('hello!');

// route to survey html doc	
router.get('/survey', function(request, response){
	response.sendFile(path.join(__dirname, '..', 'public', 'survey.html'));
});

// catch all directs to the homepage
router.get('*', function(request, response){
	response.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
});

module.exports = router;