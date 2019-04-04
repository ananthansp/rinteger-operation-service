var mongoose = require('mongoose');

const ticketsettingSchema = new mongoose.Schema({
   
   department:[String],
   assignedto:[String],
   assignedby:[String]

});
const ticketsetting = mongoose.model('ticketsetting',ticketsettingSchema);
module.exports =  ticketsetting;