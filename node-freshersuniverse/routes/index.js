'use strict';

const user = require('./users');
const data = require('./table-data');
const bodyParser = require('body-parser');
const { tokenServ } = require('../service/token');


function routes(app){
	 app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

	app.use('/auth', user);

	 app.use('/api/', (req, res, next) =>{
    const token = (req.headers || {}).authorization;
    if (!token) {
      return res.status(401).json({message: "Unauthorized User"});
    }
    let decodedToken;
    try{
      decodedToken = tokenServ.verify(token);
      next();
    }
    catch(error){
      next(error);
    }
  })

	app.use('/api',data);
	 /*
    * Error Handling
    */
  app.use((error, req, res, next) =>{
  	const { message, status } = error || {};
  	 res.status(status || 500).json({ message });
  })
}

module.exports = routes;
