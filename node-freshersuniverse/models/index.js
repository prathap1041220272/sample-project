'use strict'
const user =require('./user');
const tableSchema = require('./table_db');
const db = require('./connection')

module.exports ={
	user,
	tableSchema,
	db
}