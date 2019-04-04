var mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    _id: String,
    productType: String,
    noOfProduct: Number
});


module.exports =  productSchema;