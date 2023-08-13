const express = require('express');

const UserController = require('../../controllers/user-controller');

const router = express.Router();

router.post(
    '/signup', 
    // AuthRequestValidators.validateUserAuth,
    UserController.create
);
router.post(
    '/signin',UserController.signIn
)
module.exports=router;