var mongoose = require('mongoose');
var bankdetails = require('./bankdetail.model');
var companydetails = require('./companydetail.model');
var footerdetails = require('./footerdetail.model');
const workOrderSetingsSchema = new mongoose.Schema({
    gst: Number,
    sgst: Number,
    cgst: Number,
    terms: String,
    digitalterms: String,
    bankdetails: [bankdetails],
    companydetails: [companydetails],
    footerdetails: [footerdetails],
   
});

const workOrderSettings = mongoose.model('workOrderPDFSettings', workOrderSetingsSchema);
module.exports =  workOrderSettings;