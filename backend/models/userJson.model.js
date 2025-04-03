const mongoose = require('mongoose');
const userJson = mongoose.model("userinfo", new mongoose.Schema({}, { strict: false }));
module.exports = userJson