
/* exports.createProformaInvoice = function (req, res, date, bookingOrder) {
  let proformaInvoice = {
    customerID: req.body.customerID,
    customerName: req.body.customerName,
    companyName: req.body.companyName,
    companyAddress: req.body.companyAddress,
    mobileNumber: req.body.mobileNumber,
    emailId: req.body.emailId,
    leadID: req.body.leadID,
    workOrderID: req.body.workOrderID,
    proformaInvoiceID: bookingOrder,
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
        proformaInvoice: proformaInvoice
      }
    },
    function (err, leaddata) {
      if (err) { // if it contains error return 0
        res.status(500).send({
          "result": 0
        });
      } else {
        res.status(200).json(leaddata);
      }
    }
  )
}

exports.viewProforma = function (req, res) {
  Leads.find({
    _id: req.params.leadid
  }).select('proformaInvoice').exec(function (err, viewProformaInvoiceData) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {
      res.status(200).json(viewProformaInvoiceData[0].proformaInvoice);
    }
  });
};

exports.viewSingleProformaInvoice = function (req, res) {
  Leads.find({
    _id: req.params.leadid
  }).select('proformaInvoice').exec(function (err, viewProformaInvoice) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {
      var profomanInvoiceData = viewProformaInvoice[0].proformaInvoice.id(req.params.pinvid);
      res.status(200).json(profomanInvoiceData);
    }
  });
}

exports.viewAllProforma = function (req, res) {
  Leads.find({
  }).select('proformaInvoice').exec(function (err, profomaData) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {
      res.status(200).json(profomaData);
    }
  });
};

exports.deleteProformaInvoice = function (req, res) {
  Leads.findById({
    _id: req.params.leadid
  }).select('proformaInvoice').exec(function (err, proformaInvoiceData) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {
      var details = proformaInvoiceData.proformaInvoice.id(req.params.id);
      details.remove();
      proformaInvoiceData.save(function (err, data) {
        if (err) {
          res.status(500).send({
            "result": "error occured while deleteing the subcollection"
          });
        } else {
          Leads.find({
            _id: req.params.leadid
          }).select('proformaInvoice').exec(function (err, data) {
            if (err) {
              res.status(500).send({
                "result": 'error occured while retreiving data'
              })
            } else {
              res.status(200).json(data[0].proformaInvoice);
            }
          });
        }
      })
    }
  });
};
 */

var ProfomaInvoice = require('./../model/profomainvoice.model');

exports.createProformaInvoice = function (req, res, bookingOrder) {
    var profomaInvoice = new ProfomaInvoice();
    profomaInvoice.customerID = req.body.customerID,
    profomaInvoice.customerName = req.body.customerName,
    profomaInvoice.companyName = req.body.companyName,
    profomaInvoice.companyAddress = req.body.companyAddress,
    profomaInvoice.mobileNumber = req.body.mobileNumber,
    profomaInvoice.emailId = req.body.emailId,
    profomaInvoice.leadID = req.body.leadID,
    profomaInvoice.workOrderID = req.body.workOrderID,
    profomaInvoice.proformaInvoiceID = bookingOrder,
    profomaInvoice.date = req.body.date,
    profomaInvoice.expiryDate = req.body.expiryDate,
    profomaInvoice.requirements = req.body.requirements,
    profomaInvoice.allTotal = req.body.allTotal,
    profomaInvoice.subTotal = req.body.subTotal,
    profomaInvoice.tax = req.body.tax
  profomaInvoice.save(function (err, data) {
    if (err) {
      res.status(500).send({
        "result": 'error occured while saving data'
      })
    } else {
      res.status(200).json(data);
    }
  })
}
exports.deleteProformaInvoice = function (req, res) {
  ProfomaInvoice.findByIdAndRemove(req.params.pinvid,
    function (err, data) {
      if (err) {
        res.status(500).send({
          "result": 'error occured while deleting data'
        })
      } else {
        ProfomaInvoice.find({}).select().exec(function (err, data) {
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
exports.viewProforma = function (req, res) {
  ProfomaInvoice.find({
    workOrderID: req.params.workid
  }).select().exec(function (err, viewProforma) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {
      res.status(200).json(viewProforma);
    }
  });
};

exports.viewSingleProformaInvoice = function (req, res) {
  ProfomaInvoice.find({
    _id: req.params.pinvid
  }).select().exec(function (err, profomaInvoiceData) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {
      res.status(200).json(profomaInvoiceData);
    }
  });
}

exports.viewAllProforma = function (req, res) {
  ProfomaInvoice.find({}).select().exec(function (err, viewProInvoiceData) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {
      res.status(200).json(viewProInvoiceData);
    }
  });
};
exports.updateProfomaInvoice = function (req, res) {
  ProfomaInvoice.findById(req.params.id,function (err, invoice) {
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
      invoice.emailId =  req.body.emailId,
      invoice.leadID =  req.body.leadID,
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
          ProfomaInvoice.find({}).select().exec(function (err, data) {
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

exports.findFromMonthToMonth = function (req, res) {
  ProfomaInvoice.aggregate([
    {
      "$group": {
        "_id": {
          "month": { "$month": "$date" },
          "year": { "$year": "$date" }
        },
        "monthCollection": { "$push": "$$ROOT"   },
      }
    }, {
     "$match" : { "_id": req.body }
    }
  ]).exec( function (err, profomaMonthData) {
    if (err) {
      res.status(500).send({
        "result": "error occured while finding the collection"
      });
    } else {
      if (profomaMonthData.length > 0) {
        res.status(200).json(profomaMonthData[0].monthCollection);
      } else { 
        res.status(200).json(profomaMonthData);
      }
    }
  });
}


exports.findtoDatefromDate = function (req, res) {
  ProfomaInvoice.find({
    date: {
      $gte: req.body.fromDate, $lte: req.body.toDate
    }
  }).select().exec(function (err, profomaInvoiceDateData) {
    if (err) {
      res.status(500).send({
        "result": "error occured while finding the collection"
      });
    } else {
      res.status(200).json(profomaInvoiceDateData);
    }
  }
  );
}

