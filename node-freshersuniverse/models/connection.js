'use strict'
const mongoose = require('mongoose');

//connecting the mongoose to the server
mongoose.connect('mongodb://localhost/project')
.then((data)=>{
	console.log('connected to db')
})
.catch((error)=>{
	console.log(err.message)
})

module.exports = mongoose;