'use strict'
const bcrypt = require('bcrypt');
const rounds = 10 ;

function hashPassword(data) {
	return bcrypt.hashSync(data,rounds);
}

function comparePassword(plainPassword,hash) {
	// console.log(plainPassword, hash)
	 const pass = bcrypt.compare(plainPassword,hash);
	 // console.log(pass)
	 return pass
}

module.exports = {
	hashPassword,
	comparePassword
}