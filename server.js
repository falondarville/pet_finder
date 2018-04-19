const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require(path.join(__dirname, 'routing', 'htmlRoutes'));

const app = express();
const PORT = process.env.PORT || 3306;

app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, function(){
    console.log(`The server is up and running on port: ${PORT} .`);
});



