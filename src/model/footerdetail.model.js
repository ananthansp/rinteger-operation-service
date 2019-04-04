var mongoose = require('mongoose');
const footerDetailSchema = new mongoose.Schema({
    companyName: String,
    address: String,
    website: String,
    emailId: String,
    phNo: String,
});

module.exports =  footerDetailSchema;