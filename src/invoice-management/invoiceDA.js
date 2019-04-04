/* var Leads = require('../model/lead.model');
exports.createInvoice = function (req, res, date, bookingOrder) {
  let invoice = {
    customerID: req.body.customerID,
    customerName: req.body.customerName,
    companyName: req.body.companyName,
    companyAddress: req.body.companyAddress,
    mobileNumber: req.body.mobileNumber,
    emailId: req.body.emailId,
    leadID: req.body.leadID,
    workOrderID: req.body.workOrderID,
    invoiceID: bookingOrder,
    date: req.body.date,
    expiryDate: req.body.expiryDate,
    requirements: req.body.requirements,
    allTotal: req.body.allTotal,
    subTotal: req.body.subTotal,
    tax: req.body.tax
  };
  Leads.findOneAndUpdate({
      _id: req.params.id
    }, {
      $push: {
        invoice: invoice
      },
    },
    function (err, leaddata) {
      if (err) { 
        res.status(500).send({
          "result": 0
        });
      } else {
        console.log(leaddata)
        res.status(200).json(leaddata);
      }
    }
  )
}

  exports.viewInvoice = function (req, res) {
    Leads.find({
      _id: req.params.leadid
    }).select('invoice').exec(function (err, viewInvoiceData) {
      if (err) {
        res.status(500).send({
          message: "Some error occurred while retrieving notes."
        });
      } else {
        res.status(200).json(viewInvoiceData[0].invoice);
      }
    });
  };
  exports.viewAllInvoice = function (req, res) {
    Leads.find({
    }).select('invoice').exec(function (err, viewInvoiceData) {
      if (err) {
        res.status(500).send({
          message: "Some error occurred while retrieving notes."
        });
      } else {
        res.status(200).json(viewInvoiceData);
      }
    });
    Leads.aggregate(
      [
        {
        $unwind: "$invoice"
      },        {
          $project:
            {
              month: { $month: "$date" }
            }
        }
        {
          $group:
            {
              _id: "$_id",
              _id: "$invoice"
            }
        }
      ]
   ).exec(function (err, total) {
      
     res.status(200).json(total);
     console.log(total);
   })
  };
  
  exports.viewSingleInvoice = function (req, res) {
    Leads.find({
      _id: req.params.leadid
    }).select('invoice').exec(function (err, viewInvoice) {
      if (err) {
        res.status(500).send({
          message: "Some error occurred while retrieving notes."
        });
      } else {
        var invoiceData = viewInvoice[0].invoice.id(req.params.invid);
        res.status(200).json(invoiceData);
      }
    });
  }

  
exports.deleteInvoice  = function (req, res) {
    Leads.findById({
      _id: req.params.leadid
    }).select('invoice').exec(function (err, invoiceData) {
      if (err) {
        res.status(500).send({
          message: "Some error occurred while retrieving notes."
        });
      } else {
        var details = invoiceData.invoice.id(req.params.id);
        details.remove();
        invoiceData.save(function (err, data) {
          if (err) {
            res.status(500).send({
              "result": "error occured while deleteing the subcollection"
            });
          } else {
            Leads.find({ _id: req.params.leadid}).select('invoice').exec(function (err, data) {
              if (err) {
                res.status(500).send({
                  "result": 'error occured while retreiving data'
                })
              } else {
                res.status(200).json(data[0].invoice);
              }
            });
          }
        })
      }
    });
  }; */
var Invoice = require('../model/invoice.model');
exports.createInvoice = function (req, res, bookingOrder) {
  var invoice = new Invoice();
  invoice.customerID = req.body.customerID,
    invoice.customerName = req.body.customerName,
    invoice.companyName = req.body.companyName,
    invoice.companyAddress = req.body.companyAddress,
    invoice.mobileNumber = req.body.mobileNumber,
    invoice.emailId = req.body.emailId,
    invoice.leadID = req.body.leadID,
    invoice.workOrderID = req.body.workOrderID,
    invoice.invoiceID = bookingOrder,
    invoice.date = req.body.date,
    invoice.expiryDate = req.body.expiryDate,
    invoice.requirements = req.body.requirements,
    invoice.allTotal = req.body.allTotal,
    invoice.subTotal = req.body.subTotal,
    invoice.tax = req.body.tax
  invoice.save(function (err, data) {
    if (err) {
      res.status(500).send({
        "result": 'error occured while saving data'
      })
    } else {
      res.status(200).json(data);
    }
  })
}
exports.deleteInvoice = function (req, res) {
  Invoice.findByIdAndRemove(req.params.invid, function (err, data) {
    if (err) {
      res.status(500).send({
        "result": 'error occured while deleting data'
      })
    } else {
      Invoice.find({}).select().exec(function (err, data) {
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
exports.viewInvoice = function (req, res) {
  Invoice.find({
    workOrderID: req.params.workid
  }).select().exec(function (err, viewInvoice) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {
      res.status(200).json(viewInvoice);
    }
  });
};

exports.viewSingleInvoice = function (req, res) {
  Invoice.find({
    _id: req.params.invid
  }).select().exec(function (err, invoiceData) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {
      res.status(200).json(invoiceData);
    }
  });
}
exports.updateInvoice = function (req, res) {
  Invoice.findById(req.params.id, function (err, invoice) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {

      invoice.customerID = req.body.customerID,
        invoice.customerName = req.body.customerName,
        invoice.companyName = req.body.companyName,
        invoice.companyAddress = req.body.companyAddress,
        invoice.mobileNumber = req.body.mobileNumber,
        invoice.emailId = req.body.emailId,
        invoice.leadID = req.body.leadID,
        invoice.workOrderID = req.body.workOrderID,
        invoice.invoiceID = req.body.invoiceID,
        invoice.date = req.body.date,
        invoice.expiryDate = req.body.expiryDate,
        invoice.requirements = req.body.requirements,
        invoice.allTotal = req.body.allTotal,
        invoice.subTotal = req.body.subTotal,
        invoice.tax = req.body.tax
      invoice.save(function (err, data) {
        if (err) {
          res.status(500).send({
            "result": "error occured while deleteing the subcollection"
          });
        } else {
          Invoice.find({}).select().exec(function (err, data) {
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

exports.viewAllInvoice = function (req, res) {
  Invoice.find({}).select().exec(function (err, viewInvoiceData) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {
      res.status(200).json(viewInvoiceData);
    }
  });
};

exports.findFromMonthToMonth = function (req, res) {
  Invoice.aggregate([
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
  ]).exec(function (err, invoiceMonthData) {
    console.log(invoiceMonthData);
    if (err) {
      res.status(500).send({
        "result": "error occured while finding the collection"
      });
    } else {
      if (invoiceMonthData.length > 0) {
        
        res.status(200).json(invoiceMonthData[0].monthCollection);
      } else {
        res.status(200).json(invoiceMonthData);
      }
    }
  });
}


exports.findtoDatefromDate = function (req, res) {
  Invoice.find({
    date: {
      $gte: req.body.fromDate, $lte: req.body.toDate
    }
  }).select().exec(function (err, invoiceDateData) {
    if (err) {
      res.status(500).send({
        "result": "error occured while finding the collection"
      });
    } else {
      res.status(200).json(invoiceDateData);
    }
  });
}
