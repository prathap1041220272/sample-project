'use strict'
//importing the packages
const express =require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
var cors = require('cors');
const path = require('path');
const {db} = require('./models');
const morgan = require('morgan');

//creating the instance of express
const app= express();
// const http = require('http');
// const server = http.createServer(app);
// const io = require('socket.io')(server);
//initiating the port
const port = process.env.PORT || 4446;
//bodyParser to parse the data
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
//cors
app.use(cors())
//morgan
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'loggerFiles'), {flags: 'a'})
// setup the logger
app.use(morgan('combined', {stream: accessLogStream}))
// //routes
require('./routes')(app);

//socket Connection

// io.on('connection', (socket) => {
// 	console.log('Client Connected');

// 	socket.on('disconnet', () => {
// 		console.log('Client disconnected');
// 	})
// });

//server start
app.listen(port,()=>{
	console.log(`listening on port ${port}`)
})


// module.exports = server