'use strict'
const express = require('express');
const router = express.Router();
const { user } = require('../models');
const { hashPassword, comparePassword } = require('../service/bcrypt');
const { tokenGen } = require('../service/token');

router.post('/signup', (req, res, next) => {
    // console.log(req.body)
    const password = hashPassword(req.body.password)
    req.body.password = password;
    const User = new user(req.body);
    // console.log(User)
    User.save()
        // .then(data => {
        //     res.json(data)
        // })
        .then(data => tokenGen(data.email))
        .then(token => res.json({ token }))
        .catch(error => {
            res.json(error)
        })
})

router.post('/login', (req, res, next) => {
    const { email, password } = req.body;
    let userDoc = {};
    user.findOne({ email })
        .then(data => {
            // console.log(data.password, password)
            userDoc = data;
            return comparePassword(password, data.password)
        })
        .then(isSucess => {

            if (!isSucess) {
                throw new Error('Worng password');
            }
            return userDoc;
        })
        .then(data =>{ 
           const token = tokenGen(data.email)
           res.json({ token })
        })
        // .then(token => res.json({ token }))
        .catch(error => {
            res.status(401).json({message: error.message})
        })
})

module.exports = router;