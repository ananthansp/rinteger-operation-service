var mongoose = require('mongoose');
const companyDetailSchema = new mongoose.Schema({
    companyName: String,
    TAX: String,
    PAN: String,
    SAC: String,
    address: String,
    pincode: String,
    phNo: String
});

/* const workOrderDetail = mongoose.model('workOrderDetails', workOrderSchema); */
module.exports =  companyDetailSchema;