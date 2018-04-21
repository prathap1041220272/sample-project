'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid');
const options = {
	timestamps: true
}
const tableSchema = new Schema({
	id: {type: String, default: uuid},
	language: { type: String, required: [true,'field is required']},
	country: {type: String, required: [true,'field is required']},
	title:  { type: String, required: [true,'field is required']},
	author:  { type: String, required: [true,'field is required']},
	pages:  { type: Number, required: [true,'field is required']},
	link: String,
	imageLink: String,
	year:Number
}, options)

module.exports = mongoose.model('TableSchema',tableSchema)