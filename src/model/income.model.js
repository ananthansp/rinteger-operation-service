var mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
 
    /* _id: string; */
    workOrderID: String,
    customerName: String,
    date: Date,
    companyName: String,
    modeOfPayment: String,
    allTotal: Number,
    paidAmount: Number,
    tds: Number,
    balanceAmount: Number,
    gst: String
    
});
const incomeDetail = mongoose.model('incomeDetail', incomeSchema);
module.exports = incomeDetail;