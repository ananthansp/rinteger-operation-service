var mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
   ticketno:String,
   datetime:String,
   customername:String,
   requirement:String,
   priority:String,
    units:String,
   department:String,
   assignedto:String,
   assignedby:String,
   status:String,
   toclosedate:String,
   closeddate:String

});
const ticketdetails = mongoose.model('createticket',ticketSchema);
module.exports =  ticketdetails;