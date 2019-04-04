var WorkorderSettings = require('../model/workorder-settings.model');
var WorkOrder = require('../model/workorder.model');
var Leads = require('../model/lead.model');

exports.deleteWorkOrder = function (req, res) {
  WorkOrder.findByIdAndRemove(req.params.workid, function (err, data) {
    if (err) {
      res.status(500).send({
        "result": 'error occured while deleting data'
      })
    } else {
      WorkOrder.find({}).select().exec(function (err, data) {
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

exports.viewWorkOrder = function (req, res) {
  WorkOrder.find({
    leadID: req.params.leadid
  }).select().exec(function (err, viewWork) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {
      res.status(200).json(viewWork);
    }
  });
};

exports.viewSingleWorkOrder = function (req, res) {
  WorkOrder.find({
    _id: req.params.workid
  }).select().exec(function (err, workOrderData) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {
      res.status(200).json(workOrderData);
    }
  });
}

exports.companyDetails = function (req, res) {
  WorkorderSettings.find({}).select().exec(function (err, settings) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {
      res.status(200).json(settings);
    }
  });
}
exports.viewAllWorkorder = function (req, res) {
  WorkOrder.find({}).select().exec(function (err, viewWorkorderData) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {
      res.status(200).json(viewWorkorderData);
    }
  });
};


exports.createWorkOrder = function (req, res, bookingOrder) {
  Leads.findOneAndUpdate({
    leadID: req.body.leadID
  }, {
      workOrderStatus: 'Created'
    },
    function (err, leaddata) {
      if (err) { // if it contains error return 0
        res.status(500).send({
          "result": 0
        });
      } else {
        var workorder = new WorkOrder();
        workorder.workOrderID = bookingOrder;
        workorder.customerID = req.body.customerID,
          workorder.customerName = req.body.customerName,
          workorder.companyName = req.body.companyName,
          workorder.companyAddress = req.body.companyAddress,
          workorder.leadID = req.body.leadID,
          workorder.leadUnit = req.body.leadUnit,
          workorder.workOrderStatus = 'Created';
        workorder.mobileNumber = req.body.mobileNumber,
          workorder.emailId = req.body.emailId,
          workorder.date = req.body.date,
          workorder.allTotal = req.body.allTotal,
          workorder.subTotal = req.body.subTotal,
          workorder.tax = req.body.tax,
          workorder.requirements = req.body.requirements
        workorder.save(function (err, data) {
          if (err) {
            res.status(500).send({
              "result": 'error occured while saving data'
            })
          } else {
            res.status(200).json(data);
          }
        })
      }
    }
  );
}

exports.updateWorkOrder = function (req, res) {
  WorkOrder.findById(req.params.id, function (err, workorder) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {

      workorder.workOrderID = req.body.workOrderID,
        workorder.customerID = req.body.customerID,
        workorder.customerName = req.body.customerName,
        workorder.companyName = req.body.companyName,
        workorder.companyAddress = req.body.companyAddress,
        workorder.leadID = req.body.leadID,
        workorder.leadUnit = req.body.leadUnit,
        workorder.mobileNumber = req.body.mobileNumber,
        workorder.emailId = req.body.emailId,
        workorder.date = req.body.date,
        workorder.allTotal = req.body.allTotal,
        workorder.subTotal = req.body.subTotal,
        workorder.tax = req.body.tax,
        workorder.requirements = req.body.requirements
      workorder.save(function (err, data) {
        if (err) {
          res.status(500).send({
            "result": "error occured while deleteing the subcollection"
          });
        } else {
          WorkOrder.find({}).select().exec(function (err, data) {
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

exports.findtoDatefromDate = function (req, res) {
  WorkOrder.find({
    date: {
      $gte: req.body.fromDate, $lte: req.body.toDate
    }
  }).select().exec(function (err, workDateData) {
    if (err) {
      res.status(500).send({
        "result": "error occured while finding the collection"
      });
    } else {
      res.status(200).json(workDateData);
    }
  }
  );
}


exports.findFromMonthToMonth = function (req, res) {
  WorkOrder.aggregate([
    {
      "$group": {
        "_id": {
          "month": { "$month": "$date" },
          "year": { "$year": "$date" }
        },
        "monthCollection": { "$push": "$$ROOT" },
      }
    }, {
      "$match": { "_id": req.body }
    }
  ]).exec(function (err, workOrderMonthData) {
    if (err) {
      res.status(500).send({
        "result": "error occured while finding the collection"
      });
    } else {
      if (workOrderMonthData.length > 0) {
        res.status(200).json(workOrderMonthData[0].monthCollection);
      } else {
        res.status(200).json(workOrderMonthData);
      }
    }
  });
}

exports.totalWorkOrder = function (req, res) {
  WorkOrder.aggregate([{
    $group: {
      _id: '',
      totalAmount: {
        $sum: "$allTotal"
      }
    }
  }], function (error, totalAmount) {
    if (error) {
      res.status(500).send({
        "result": 'error occured while retreiving data'
      })
    } else {
      res.status(200).json(totalAmount);
    }
  });
}

exports.withOutGstWorkOrder = function (req, res) {
  WorkOrder.find({
    $and: [
      {
        $or: [{
          date: {
            $gte: req.body.fromDate, $lte: req.body.toDate
          }
        }]
      },
      { $or: [{ tax: { $eq: 0 } }] }
    ]
  }, function (error, totalWithOutGst) {
    if (error) {
      res.status(500).send({
        "result": 'error occured while retreiving data'
      })
    } else {
      res.status(200).json(totalWithOutGst);
    }
  });
}

exports.withGstWorkOrder = function (req, res) {
  WorkOrder.find({
    $and: [
      {
        $or: [{
          date: {
            $gte: req.body.fromDate, $lte: req.body.toDate
          }
        }]
      },
      { $or: [{ tax: { $gt: 0 } }] }
    ]
  }, function (error, totalWithGst) {
    if (error) {
      res.status(500).send({
        "result": 'error occured while retreiving data'
      })
    } else {
      res.status(200).json(totalWithGst);
    }
  });
}

exports.findWorkOrderUnit = function (req, res) {
  WorkOrder.find({
    $and: [
      {
        $or: [{
          date: {
            $gte: req.body.fromDate, $lte: req.body.toDate
          }
        }]
      },
      { $or: [{ leadUnit: req.body.leadUnit }] }
    ]
  }, function (err, workOrderData) {
    if (err) {
      res.status(500).send({
        "result": "error occured while finding the collection"
      });
    } else {
      res.status(200).json(workOrderData);
    }
  });
}