var ticketDA = require('./ticketDA');
var ticketModel = require('./../model/ticket.model'); 
var zeroFill = require('zero-fill');
exports.ticket = function (req,res){
  
    try {
            
        var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var date = day + "/" + month + "/" + year;
    var datetime =  currentDate.getDay() + "/"+currentDate.getMonth() 
    + "/" + currentDate.getFullYear() + " @ " 
    + currentDate.getHours() + ":" 
    + currentDate.getMinutes() + ":" + currentDate.getSeconds()

    
        var oYear = year.toString();
        var orderYear = oYear.slice(-2);
        var order = "TCK";
        var locale = "en-us";
        var result = currentDate.toLocaleString(locale, {
          month: "long"
        });
        var orderMonth = result.substr(0, 3).toUpperCase();
    
    
        ticketModel.find().select().exec(function (err, details) {
          if(err) {
            res.status(500).send({
              message: "Some error occurred while retrieving notes."
            });
          } else{
             if (details[0] == null) {
              var ticket= order + orderYear + orderMonth + "0001";
              ticketDA.ticketing(req, res, datetime, ticket);
            } else {
              var arrayLength = details.length - 1;
            var maxID =details[arrayLength].ticketno.substr(10,4);
              var incOrder = maxID.slice(-4);
              var addZero = zeroFill(4, 1);
              var result = parseInt(incOrder) + parseInt(addZero);
              var results = zeroFill(4, result);
              var ticket = order + orderYear + orderMonth + results;
              ticketDA.ticketing(req, res, datetime, ticket);
              console.log(ticket);
            }
          }
          
        })
      } catch (error) {
        console.log(error);
      }
};


exports.retriveticket = function(req,res) {
  try{
    ticketDA.retriveticket(req,res)
  } catch (error) {
    console.log(error);
  }
}

exports.unique = function(req,res) {
  try{
    ticketDA.unique(req,res)
  } catch (error) {
    console.log(error);
  }
}

exports.unitwiseticket = function(req,res) {
  try{
    ticketDA.unitwiseticket(req,res)
  } catch (error) {
    console.log(error);
  }
}

exports.deadlinedTicket = function(req,res) {
  try{
    ticketDA.deadlinedTicket(req,res)
  } catch (error) {
    console.log(error);
  }
}

exports.countTicket = function(req,res) {
  try{
    ticketDA.countTicket(req,res)
  } catch (error) {
    console.log(error);
  }
}
 
exports.editTicket = function(req,res) {
  try{
    ticketDA.editTicket(req,res)
  } catch (error) {
    console.log(error);
  }
}

exports.deleteTicket = function(req,res) {
  try{
    ticketDA.deleteTicket(req,res)
  } catch (error) {
    console.log(error);
  }
}
