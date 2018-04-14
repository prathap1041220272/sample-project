'use strict';
const express = require('express');
const router = express.Router();
const { tableSchema } = require('../models')

router.route('/data')

.get((req, res, next) =>{
	tableSchema.find({})
	.then((data)=>{res.json(data)})
	.catch((err)=>{console.log(err.message)})
})


.post((req, res, next) =>{
	const Table = new tableSchema(req.body)
	Table.save()
	.then(data => {
		res.json(data)
	})
	.catch(error => {
		console.log(error)
	})

})


module.exports = router;
