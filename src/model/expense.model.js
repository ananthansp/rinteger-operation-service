var mongoose = require('mongoose');

const expernseSchema = new mongoose.Schema({
    mobileNumber : Number,
    name : String,
    companyName : String,
    expenseType : String,
    modeOfPayment : String,
    location : String,
    date : Date,
    totalAmount : Number,
    paid : Number,
    balance : Number,
    vouNo : String,
    expensesDescription : String,
    gst: String
});
const expenseDetail = mongoose.model('expenseDetail', expernseSchema);
module.exports = expenseDetail;