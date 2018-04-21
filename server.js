const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemon = require('nodemon');
const routes = require(path.join(__dirname, 'routing', 'htmlRoutes'));
const apiRoutes = require(path.join(__dirname, 'routing', 'apiRoutes'));

const app = express();
const PORT = process.env.PORT || 3306;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/assets',express.static('assets'));
app.use('/api', apiRoutes);
app.use('/', routes);

app.listen(PORT, function(){
    console.log(`The server is up and running on port: ${PORT} .`);
});