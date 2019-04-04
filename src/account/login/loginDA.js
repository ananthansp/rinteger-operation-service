var AdminAccount = require('./../../model/admin-account.model');
var Register = require('./../../model/register.model');
var UserPermission = require('./../../model/userPermission.model');


exports.createLoginDetail = function (req, res) {
  var adminAccount = new AdminAccount(req.body);

  adminAccount.save(function (err, adminData) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred"
      });
    } else {
      res.status(200).json(adminData);
    }
  });
};
exports.loginVerify = function (req, res) {
  AdminAccount.findOne({
    'userName': req.body.userName,
    'password': req.body.password
  }, function (err, adminMaster) {
    if (err) {
      res.status(500).send({
        message: "user not Register"
      });
    } else {
      if (adminMaster === null) {
        res.status(500).send({
          message: "user not create role"
        });
      } else {
        Register.aggregate([
          {
            $lookup:
            {
              from: 'roles',
              localField: 'role',
              foreignField: 'role',
              as: 'userdetails'
            }
          },
          {
            $unwind: "$userdetails"
          },
          {
            $match: { "userdetails.role": { $eq: adminMaster.role } }
          }
        ], function (err, roleData) {
          if (err) {
            res.status(500).send({
              message: "role not get"
            });
          } else {
           let data =  roleData.filter(value => 
              value.userName === adminMaster.userName
           )
            res.status(200).send(data);
            console.log(data);
          }
        });
      }
    }
  });
};
