'use strict'
//importing the packages
const express =require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const mongoose = require('./models/connection')
const User = require('./models');
const morgan = require('morgan')
//creating the instance of express
const app= express();
//initiating the port
const port = process.env.PORT || 4446;


//bodyParser to parse the data
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


//morgan

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'loggerFiles'), {flags: 'a'})
 
// setup the logger
app.use(morgan('combined', {stream: accessLogStream}))


// //routes
require('./routes')(app);
//server start
app.listen(port,()=>{
	console.log(`listening on port ${port}`)
})