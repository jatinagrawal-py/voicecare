const userModel = require('../models/user.model')
const userJson = require('../models/userJson.model')
const userService = require('../services/user.service')
const { validationResult } = require('express-validator')
const blacklistTokenModel = require('../models/blacklistToken.model')

module.exports.signupUser = async (req, res, next) => {
    const errors = validationResult(req)
    //bad req
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }

    const { username, email, password } = req.body

    const xxx = await userModel.findOne({ username })

    if (xxx) {
        return res.status(400).json({ message: 'user already exist' })
    }

    const hashPassword = await userModel.hashPassword(password)

    const user = await userService.createUser({
        username,
        email,
        password: hashPassword
    })
    const token = user.generateAuthToken()
    //201 created
    res.status(201).json({ token, user })
}

module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }

    const { username, password } = req.body

    const user = await userModel.findOne({ username }).select('+password')

    //401 unauthorized
    if (!user) {
        return res.status(401).json({ message: "invalid email or password" })
    }

    const isMatch = await user.comparePassword(password)

    if (!isMatch) {
        return res.status(401).json({ message: "invalid email or password" })
    }

    const token = user.generateAuthToken()

    res.cookie('token', token)

    //200 means good req
    res.status(200).json({ token, user })
}

module.exports.formData = async(req,res,next)=>{
    const form = req.body
    const result = await userJson.create(form);
    res.status(200).json({ message : "user registered succesfully"  })
}

module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user)
}

module.exports.logoutUser = async (req, res, next) => {

    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    res.clearCookie('token')


    await blacklistTokenModel.create({ token })

    res.status(200).json({
        message: 'logged out'
    })
}