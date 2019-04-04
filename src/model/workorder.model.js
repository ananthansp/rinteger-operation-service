var mongoose = require('mongoose');
var details = require('./details.model');
const workOrderSchema = new mongoose.Schema({
    workOrderID: String,
    customerID: String,
    customerName: String,
    companyName: String,
    companyAddress: String,
    leadID: String,
    leadUnit: String,
    workOrderStatus: String,
    mobileNumber: Number,
    emailId: String,
    date: Date,
    requirements: [details],
    allTotal: Number,
    subTotal: Number,
    tax: Number
});

const workOrderDetail = mongoose.model('workOrderDetails', workOrderSchema);
module.exports = workOrderDetail;