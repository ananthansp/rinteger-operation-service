var mongoose = require('mongoose');
var requirements = require('./details.model')
const profomaInvoiceSchema = new mongoose.Schema({
    customerID: String,
    customerName: String,
    companyName: String,
    companyAddress: String,
    mobileNumber: String,
    emailId: String,
    leadID: String,
    workOrderID: String,
    proformaInvoiceID: String,
    date: Date,
    expiryDate: Date,
    status: String,
    allTotal: Number,
    subTotal: Number,
    tax: Number,
    requirements: [requirements]
});
const profomaDetail = mongoose.model('profomainvoice', profomaInvoiceSchema);
module.exports =  profomaDetail;

