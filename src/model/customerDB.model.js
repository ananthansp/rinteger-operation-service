var mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    customerID: String,
    mobileNumber: Number,
    altMobileNumber: Number,
    name: String,
    emailId: String,
    location: String,
    /* city: String, */
    state: String,
    pincode: String,
    companyName: String,
    companyAddress: String,
    gstNumber: String,
    brandName: String,
    date: { type: Date, default: Date.now }
});

const CustomerDB = mongoose.model('customerDB', CustomerSchema);
module.exports = CustomerDB;