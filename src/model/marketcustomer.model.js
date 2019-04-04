var mongoose = require('mongoose');

var MarketCustomerSchema = new mongoose.Schema({
    name: String,
    mobileNumber: Number,
    whatsAppNo: String,
    landLine: String,
    emailId: String,
    location: String,
}); 

const MarketCustomer = mongoose.model('marketcustomer', MarketCustomerSchema);
module.exports = MarketCustomer;