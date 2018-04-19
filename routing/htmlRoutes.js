const express = require('express');
const path = require('path');

const router = express.Router();

console.log('hello!');

// ROUTE TO SURVEY HTML DOC	
router.get('/survey', function(request, response){
	response.sendFile(path.join(__dirname, '..', 'public', 'survey.html'));
});

// CATCH ALL ROUTE TO HOMEPAGE
router.get('*', function(request, response){
	response.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
});

module.exports = router;