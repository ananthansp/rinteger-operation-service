var mongoose = require('mongoose');

const detailsQuotationSchema = new mongoose.Schema({
    item: String,
    quantity: Number,
    price: Number,
    discount: Number,
    taxRate: Number, 
    total: Number,
    description: String
});

module.exports = detailsQuotationSchema;