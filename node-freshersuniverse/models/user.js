'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uuid = require('uuid');
const options = {
	timestamps: true
};


const userSchema = new Schema({
	id: { type: String, default: uuid },
	username:{type:String,unique:[true,'username alreaady exists'],required:[true,'field is required']},
	email:{type:String,unique:[true,'email alreaady exists'],required:[true,'field is required']},
	mobile:{type:Number,required:[true,'field is required']},
	DOB:{type:String,required:[true,'field is required']},
	password:{type:String,required:[true,'field is required']}
},options)

module.exports = mongoose.model('User',userSchema)