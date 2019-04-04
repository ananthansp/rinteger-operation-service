var mongoose = require('mongoose');

var RegisterSchema = new mongoose.Schema({
    userName: String,
    password: String,
    mobileNumber: String,
    email: String,
    role: String,
    unit: String,
    isActive: Boolean
});

const Register = mongoose.model('register', RegisterSchema);
module.exports = Register;