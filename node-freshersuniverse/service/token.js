'use strict'
const jwt = require('jsonwebtoken');
const expiresIn = '2h';
const secret = 'secret';

function tokenGen(data) {
	// console.log(data)
	return jwt.sign({data},secret,{expiresIn})
}
function verify(data) {
	return jwt.verify(data,secret)
}

module.exports = {
	tokenGen,
	verify
}