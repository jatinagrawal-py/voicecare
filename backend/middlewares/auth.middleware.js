const userModel = require('../models/user.model')
const blacklistTokenModel = require('../models/blacklistToken.model')
const jwt = require('jsonwebtoken')
const bcryt = require('bcrypt')

module.exports.authUser = async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({
            message:"unauthorized"
        })
    }
    const isBlacklisted = await blacklistTokenModel.findOne({token:token})
    
    if(isBlacklisted){
        return res.status(401).json({message : "unauthorized"})
    }

    try{
    const decoded = jwt.verify(token,process.env.JWT_SECRET) //_id:this._id toh yahi ayegi
    const user = await userModel.findById(decoded._id)
    req.user = user

    return next();

} catch(err){
    return res.status(401).json({
        message:"unauthorized"
    })
}

}