const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const animeRoutes= require('./routes/animeRoutes');



// express app
const app = express();

// connect to mongodb & listen for requests
// const dbURI = "mongodb+srv://jasmin_s03:Test1234@jasmin1.ovycztj.mongodb.net/Test1?retryWrites=true&w=majority&appName=Jasmin1";
const dbUri = "mongodb+srv://jasmin_s03:Test1234@jasmin1.ovycztj.mongodb.net/Test1?retryWrites=true&w=majority&appName=Jasmin1"


mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');


// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});
// routes
app.get('/', (req, res) => {
  res.redirect('/anime');
});

//routes

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

 
app.use('/anime', animeRoutes);

 //404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

module.exports = app;