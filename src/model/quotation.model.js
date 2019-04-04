var mongoose = require('mongoose');
var requirements = require('./details.model')

const quotationSchema = new mongoose.Schema({
  customerID: String,
  customerName: String,
  companyName: String,
  companyAddress: String,
  mobileNumber: String,
  emailId: String,
  leadID: String,
  quotationID: String,
  date: Date,
  expiryDate: String,
  status: String,
  allTotal: Number,
  subTotal: Number,
  tax: Number,
  requirements: [requirements]
});
const quotationDetail = mongoose.model('quotation', quotationSchema);
module.exports =  quotationDetail;