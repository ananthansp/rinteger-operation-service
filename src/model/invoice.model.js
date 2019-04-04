var mongoose = require('mongoose');
var requirements = require('./details.model')
const invoiceSchema = new mongoose.Schema({
    invoiceID: String,
    customerID: String,
    customerName: String,
    companyName: String,
    companyAddress: String,
    mobileNumber: String,
    emailId: String,
    leadID: String,
    requirements: [requirements],
    workOrderID: String,
    date: Date,
    expiryDate: Date,
    status: String,
    allTotal: Number,
    subTotal: Number,
    tax: Number,

});

const invoiceDetail = mongoose.model('invoice', invoiceSchema);
module.exports = invoiceDetail;


