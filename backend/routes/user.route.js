const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const {body} = require('express-validator')

router.post('/voicecare-signup',[
    body('username').isLength({min:5}).withMessage('first name must be of 5 char long')
    ,
    body('email').isEmail().withMessage('invalid email')
    ,
    body('password').isLength({min:5}).withMessage('password msut be 5 char long')
],userController.signupUser)

router.post('/voicecare-login',[
    body('username').isLength({min:5}).withMessage('invalid email')
    ,
    body('password').isLength({min:5}).withMessage('password msut be 5 char long')
],userController.loginUser)

router.get('/voicecare-ai',authMiddleware.authUser,userController.getUserProfile)

router.get('/voicecare-logout',authMiddleware.authUser,userController.logoutUser)

module.exports = router