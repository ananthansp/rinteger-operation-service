'use strict';


var ticketcreate = require('./../model/ticket.model');

exports.ticketing = function (req, res, datetime, ticket) {


    var ticketholder = new ticketcreate();


    ticketholder.ticketno = ticket;
    ticketholder.datetime = datetime;

    ticketholder.customername = req.body.customername;
    ticketholder.requirement = req.body.requirement;
    ticketholder.priority = req.body.priority;
    ticketholder.units = req.body.units;
    ticketholder.department = req.body.department;
    ticketholder.assignedto = req.body.assignedto;
    ticketholder.assignedby = req.body.assignedby;
    ticketholder.status = req.body.status;
    ticketholder.toclosedate = req.body.toclosedate;
    ticketholder.closeddate = req.body.closeddate;



    ticketholder.save(
        function (err, ticketdetails) {
            if (err) {
                res.send.status(500).json({ "result": "0" });
            } else {
                res.status(200).json(ticketdetails);
                console.log(ticketdetails);
            }
        });
};

exports.retriveticket = function (req, res) {
    ticketcreate.find({}).select().exec(function (err, result) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);
            console.log(result);
        }
    });

}

exports.unique = function (req, res) {
    ticketcreate.find({ "_id": req.params.id }).select().exec(function (err, uniqueticket) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(uniqueticket);
            console.log(uniqueticket);
        }
    });

}



exports.unitwiseticket = function (req, res) {
    ticketcreate.find({ "units": req.params.name}).select().exec(function (err, result) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);
            console.log(result);
        }
    });

}

exports.deadlinedTicket = function (req, res) {
    var currentDate = new Date();
    console.log(currentDate);
    

    ticketcreate.find({toclosedate:{"$lte":currentDate}})
              .select().exec(function (err, result) {

        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);
            console.log(result);
        }
    });

}

exports.editTicket = function (req, res) {
    ticketcreate.findById({
      '_id': req.params.id
    }, function (err, data) {
      if (err) {
        res.status(500).send({
          "result": 'error occured while retreiving data'
        })
      } else {
       
       /*  data.taskNo = req.body.taskNo;
        data.dateTime = req.body.dateTime;
        data.name = req.body.name;
        data.taskTitle = req.body.taskTitle;
        data.taskDescription = req.body.taskDescription;
        data.priority = req.body.priority;
        data.units = req.body.units;
        data.department = req.body.department;
        data.assignedTo = req.body.assignedTo;
        data.assignedBy = req.body.assignedBy; */
        data.status = req.body.status;
     /*    data.toCloseDate = req.body.toCloseDate; */
        data.closedDate = req.body.closedDate;
        data.save(function (err, details) {
          if (err) {
            res.status(500).send({
              "result": 'error occured while retreiving data'
            })
  
          } else {
            ticketcreate.find({}).select().exec(function (err, data) {
              if (err) {
                res.status(500).send({
                  "result": 'error occured while retreiving data'
                })
              } else {
                res.status(200).json(data);
              }
            });
          }
        })
      }
    });
  }

  exports.deleteTicket = function (req, res) {
    ticketcreate.findByIdAndRemove(req.params.id, function (err, data) {
        if (err) {
          res.status(500).send({
            "result": 'error occured while deleting data'
          })
        } else {
          ticketcreate.find({}).collation({}).select().exec(function (err, data) {
            if (err) {
              res.status(500).send({
                "result": 'error occured while retreiving data'
              })
            } else {
              res.status(200).json(data);
            }
          });
        }
      });
    }
  
  


