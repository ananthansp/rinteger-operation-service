var UserPermission = require('../../model/userPermission.model');

exports.permissionRole = function (req, res) {
    var userPermission = new UserPermission(req.body);
    userPermission.save(function (err, data) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
            console.log(err);
        } else {
            UserPermission.find({
            }, function (err, rolePermission) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {
                    res.status(200).json(rolePermission);
                }
            });
        }
    });
}

exports.getRoles = function (req, res) {
    UserPermission.find({}).select().exec(function (err, roles) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(roles);
        }
    });
};

exports.deleteRoles = function (req, res) {
    UserPermission.findByIdAndRemove({ "_id": req.params.id}).select().exec(function (err, delroles) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(delroles);
        }
    });
};

exports.editRoles = function (req, res) {
    UserPermission.findByIdAndUpdate({ "_id": req.params.id}).select().exec(function
         (err, editroles) {
        if (err) {
            editroles= req.body.roles;
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(editroles);
        }
    });
};
/* exports.editRoles = function (req, res) {
    UserPermission.findById({
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
      /*   data.status = req.body.status; */
     /*    data.toCloseDate = req.body.toCloseDate; */
     /*    data.closedDate = req.body.closedDate;
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
 */ 