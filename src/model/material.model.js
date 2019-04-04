var mongoose = require("mongoose");
var product = require('./product.model');

var materialSchema = new mongoose.Schema({
    workOrderID: String,
    DCnumber: String,
    date: Date,
    customerName: String,
    receivedBy: String,
    unit: String,
 /*    productType: String,
    noOfProduct: Number, */
   /*  shootType: String, */
    shootStatus: String,
    paymentStatus: String,
    modeOfInward: String,
    modeOfOutward: String,
    dispatchType: String,
    materialStatus: String,
    remark: String,
    product: [product],
})
var materialDetail = mongoose.model('materialDetail',materialSchema);
module.exports = materialDetail;