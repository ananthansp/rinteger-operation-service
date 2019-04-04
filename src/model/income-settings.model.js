var mongoose = require('mongoose');
var incomesettingschema = new mongoose.Schema({
    modeOfPayment: [String],
    gst: [String]
});

const incomesetting = mongoose.model('incomesetting',incomesettingschema);
module.exports = incomesetting;

