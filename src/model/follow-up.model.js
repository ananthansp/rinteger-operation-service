var mongoose = require('mongoose');
const followUpSchema = new mongoose.Schema({
    id: String,
    date: Date,
    upcomingDate: Date,
    remarks: String,
});

/* const workOrderDetail = mongoose.model('workOrderDetails', workOrderSchema); */
module.exports =  followUpSchema;