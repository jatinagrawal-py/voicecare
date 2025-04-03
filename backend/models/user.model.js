const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const bcryt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique:true,
        minlength : [5,'username must be at least 5 charachter long']
    },
    email : {
        type : String,
        required : true,
        unique:true,
        minlength : [8,'email must be at least 5 charachter long']
    },
    password : {
        type : String,
        required : true,
        select : false,
        minlength : [5,'username must be at least 5 charachter long']
    }
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id : this._id} , process.env.JWT_SECRET , {expiresIn:'24h'})
    return token
}

userSchema.methods.comparePassword = async function(password){
    return await bcryt.compare(password , this.password)
}

userSchema.statics.hashPassword = async function(password){
    return await bcryt.hash(password , 10)
}

const userModel = mongoose.model('user' , userSchema)


module.exports = userModel
