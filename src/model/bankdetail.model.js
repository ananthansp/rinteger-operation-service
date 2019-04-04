var mongoose = require('mongoose');
const bankDetailSchema = new mongoose.Schema({
    accName: String,
    accNo: String,
    bankName: String,
    branchName: String,
    accountType: String,
    IFSC: String,
});

/* const workOrderDetail = mongoose.model('workOrderDetails', workOrderSchema); */
module.exports =  bankDetailSchema;