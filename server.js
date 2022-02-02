const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
require('./config/database');

const usersRouter = require('./routes/users');
const recipesRouter = require("./routes/recipes");
const categoriesRouter = require('./routes/categories');


const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));


app.use(cors({
    origin: '*'
  }));

app.use('/users', usersRouter);
app.use('/recipes', recipesRouter);
app.use('/categories', categoriesRouter);

app.use(express.static(path.join(__dirname, 'build')));


// The following "catch all" route (note the *)is necessary
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

// if (process.env.NODE_ENV === 'production')

  const port = process.env.PORT || 3001

  app.listen(port, function(){
      console.log(`Express app running on port ${port}`)
  });