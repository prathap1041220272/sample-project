'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid');
const options = {
	timestamps: true
}
const tableSchema = new Schema({
	id: {type: String, default: uuid},
	name:{type:String,required:true},
	title:{type:String,required:true},
	author:{type:String,required:true},
	description:{type:String,required:true}
}, options)

module.exports = mongoose.model('TableSchema',tableSchema)