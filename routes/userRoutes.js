const express = require('express');
const {createUser, getUsers}  = require('../controllers/user.controller') 

const userRouter = express.Router();

userRouter.route('/user')
    .post(createUser)
    .get(getUsers)

module.exports = userRouter;

