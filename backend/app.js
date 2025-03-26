const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const connectToDB = require('./db/db')
const cookieParser = require('cookie-parser')
const router = require('./routes/user.route')
connectToDB()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(cookieParser())

app.use('/',router)

module.exports = app