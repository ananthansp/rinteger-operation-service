var taskDetail = require('../model/task-management.model');
var register = require('../model/register.model');
var adminAccount = require('../model/admin-account.model');

exports.CreateTask = function (req, res, dateTime, taskNo) {
    var taskdetail = new taskDetail();
    taskDetail._id = req.body._id;
    taskdetail.taskNo = taskNo;
    taskdetail.userId = req.body.userId;
    taskdetail.dateTime = dateTime;
    taskdetail.taskTitle = req.body.taskTitle;
    taskdetail.taskDescription = req.body.taskDescription;
    taskdetail.priority = req.body.priority;
    taskdetail.units = req.body.units;
    taskdetail.department = req.body.department;
    taskdetail.assignedTo = req.body.assignedTo;
    taskdetail.assignedBy = req.body.assignedBy;
    taskdetail.status = req.body.status;
    taskdetail.toCloseDate = req.body.toCloseDate;
    taskdetail.closedDate = req.body.closedDate;
    taskdetail.save(
        function (err, data) {
            if (err) {
                res.status(500).json({ 
                    'message': 'error occure while saving data'
                 });
            } else {
                res.status(200).json(data);
                console.log(data);
            }
        });
}
exports.findAllTask = function (req, res) {
    taskDetail.find({}).select().exec(function (err, result) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);
           
        }
    });

}
exports.findSingleTask = function (req, res) {
    taskDetail.find({ "_id": req.params.id }).select().exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
           
        }
    });

}

exports.editTask = function (req, res) {
    taskDetail.findById({
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
            taskDetail.find({}).select().exec(function (err, data) {
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


  exports.unitwisetask = function (req, res) {
    taskDetail.find({ "units": req.params.name}).select().exec(function (err, result) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);
            console.log(result);
        }
    });

}

exports.deadlinedTask = function (req, res) {
    var currentDate = new Date();
    console.log(currentDate);
    

    taskDetail.find({toCloseDate:{"$lte":currentDate}})
              .select().exec(function (err, result) {

        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);
            console.log(result);
        }
    });
}

exports.unitWiseName = function (req, res) {
    register.find({}).select().exec(function (err, result) {
        if (err) {
            res.status(500).json(err);
        } else {
          res.status(200).json(result);
        }
    });

}
exports.deleteTask = function (req, res) {
  taskDetail.findByIdAndRemove(req.params.id, function (err, data) {
      if (err) {
        res.status(500).send({
          "result": 'error occured while deleting data'
        })
      } else {
        taskDetail.find({}).collation({}).select().exec(function (err, data) {
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

  exports.findAdmin = function (req, res) {
    adminAccount.find({}).select().exec(function (err, result) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);
           
        }
    });

}
exports.findByUserID = function (req, res) {
  taskDetail.find({ "userId": req.params.userId }).select().exec(function (err, data) {
      if (err) {
          res.status(500).json(err);
      } else {
          res.status(200).json(data);
         
      }
  }); 

}