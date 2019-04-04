var mongoose = require('mongoose');
var workOrder = require('./workorder.model');
var details = require('./details.model');
var quotation = require('./quotation.model');
var followUp = require('./follow-up.model');



const LeadSchema = new mongoose.Schema({
  leadID: String,
  mobileNumber: Number,
  emailId: String,
  name: String,
  leadOwner: String,
  leadSource: String,
  leadStatus: String,
  leadService: [String],
  leadType: [String],
  /* requirements: String, */
  leadUnit: String,
  date: Date,
  remarks: String,
  allTotal: Number,
  subTotal: Number,
  tax: Number,
  workOrderStatus: String,
  requirements: [details],
  /* workOrder: [workOrder], */
  /* quotation: [quotation], */
  followUp: [followUp],
  /* invoice: [invoice], */
  /* proformaInvoice: [proformaInvoice] */
});

const LeadDetail = mongoose.model('leadDetails', LeadSchema);
module.exports = LeadDetail;