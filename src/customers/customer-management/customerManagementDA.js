var Customer = require('../../model/customerDB.model');
var zeroFill = require('zero-fill');
exports.createCustomer = function (req, res, date, bookingOrder) {
  Customer.find({
    'mobileNumber': req.body.mobileNumber
  }).select().exec(function (err, data) {
    if (err) {
      res.status(500).send({
        "result": 'error occured while retreiving data'
      })
    } else {
      if (data.length == 0) {
        var customer = new Customer(req.body);
        customer.customerID = bookingOrder;
        customer.save(function (err, data) {
          if (err) {
            res.status(500).send({
              "result": 'error occured while saving data'
            })
          } else {
            res.status(200).json(data);
          }
        })

      } else {
        res.status(200).send({
          "message": 0
        });
      }
    }
  });
}
exports.viewCustomers = function (req, res) {
  Customer.find({}).collation({locale: "en" }).sort({'name': 'asc'}).select().exec(function (err, data) {
    if (err) {
      res.status(500).send({
        "result": 'error occured while retreiving data'
      })
    } else {
      res.status(200).json(data);
    }
  });
}

exports.deleteCustomers = function (req, res) {
  Customer.findByIdAndRemove(req.params.id, function (err, data) {
    if (err) {
      res.status(500).send({
        "result": 'error occured while deleting data'
      })
    } else {
      Customer.find({}).collation({locale: "en" }).sort({'name': 'asc'}).exec(function (err, data) {
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

exports.editCustomer = function (req, res) {
  Customer.findById({
    '_id': req.params.id
  }, function (err, data) {
    if (err) {
      res.status(500).send({
        "result": 'error occured while retreiving data'
      })
    } else {
      data.mobileNumber = req.body.mobileNumber; 
      data.altMobileNumber = req.body.altMobileNumber; 
      data.name = req.body.name;
      data.emailId = req.body.emailId;
      data.location = req.body.location;
      /* data.city = req.body.city; */
      data.state = req.body.state;
      data.pincode = req.body.pincode;
      data.companyName = req.body.companyName;
      data.companyAddress = req.body.companyAddress;
      data.gstNumber = req.body.gstNumber;
      data.brandName = req.body.brandName;
      data.save(function (err, details) {
        if (err) {
          res.status(500).send({
            "result": 'error occured while retreiving data'
          })

        } else {
          Customer.find({}).collation({locale: "en" }).sort({'name': 'asc'}).select().exec(function (err, data) {
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

exports.checkCustomers = function (req, res) {
  // Retrieve and return all notes from the database.
  Customer.find({
    'mobileNumber': req.params.number
  }).select().exec(function (err, workOrderCheck) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {
      res.send(workOrderCheck);
    }
  });
};
exports.viewSingleCustomer = function (req, res) {
  Customer.find({
    '_id': req.params.id
  }).select().exec(function (err, data) {
    if (err) {
      res.status(500).send({
        "result": 'error occured while retreiving data'
      })
    } else {
      res.status(200).json(data);
    }
  });
}
exports.customerDetails = function (req, res) {
  Customer.find({
    'customerID': req.params.id
  }).select().exec(function (err, data) {
    if (err) {
      res.status(500).send({
        "result": 'error occured while retreiving data'
      })
    } else {
      res.status(200).json(data);
    }
  });
}

exports.multipleCustomer = function (req, res, date, bookingOrder) {
  var customerData = [];
  for (var i = 0; i <= req.body.length - 1; i++) {
    var customer = [];
    customer[i] = new Customer();
    customer[i].mobileNumber = req.body[i].mobileNumber;
    customer[i].altMobileNumber = req.body[i].altMobileNumber;  
    customer[i].name = req.body[i].name;
    customer[i].emailId = req.body[i].emailId;
    customer[i].location = req.body[i].location;
    /* customer[i].city = req.body[i].city; */
    customer[i].state = req.body[i].state;
    customer[i].pincode = req.body[i].pincode;
    customer[i].companyName = req.body[i].companyName;
    customer[i].companyAddress = req.body[i].companyAddress;
    customer[i].gstNumber = req.body[i].gstNumber;
    customer[i].brandName = req.body[i].brandName;
              var incOrder = bookingOrder.slice(-4);
              var csID = bookingOrder.slice(0, 8)
              var addZero = zeroFill(4, i);
              var result = parseInt(incOrder) + parseInt(addZero);
              var results = zeroFill(4, result);
    customer[i].customerID = csID + results;
    customerData.push(customer[i]);
  }
  Customer.insertMany(customerData, function (err, sendData) {
    if (err) {
      console.log(err);
      res.status(500).send('Error Data');
    } else {
      res.status(200).json(sendData);
    }
  });
}