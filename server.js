const express = require('express');
const path = require('path'); // standard library

const app = express();  

app.set('view engine', 'ejs');  
app.set('views', path.join(__dirname, 'views'))

const foodsDB = require('./data/foods-db');

// route
app.get('/', function (req, res) {
    res.redirect('/foods');
 });
 
 app.get('/home', function(req, res) {
     res.render('home');
 });
 
 app.get('/foods', function (req, res) {
     const foods = foodsDB.getAll();
     res.render('foods/index', { foods });
 });
 

 app.listen(3000, function () {
    console.log('server running at localhost:3000');
});