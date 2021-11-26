const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config()
require('./config/database') 

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));

app.use('/recipes', require("./routes/recipes"))

app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route


// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  const port = process.env.PORT || 3001

  app.listen(port, function(){
      console.log(`Express app running on port ${port}`)
  })