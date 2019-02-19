/**
 * Defining modules
 */
//Built-in
const path = require('path');

//Third party
const express = require('express');
const bodyParser = require('body-parser');

//Create express app
const app = express();


//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Template engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));

const PORT = process.env.PORT || 8000;
app.listen(PORT);