/* var Leads = require('../model/lead.model');
exports.createQuotation = function (req, res, date, bookingOrder) {
  let quotationData = {
    quotationID: bookingOrder,
    customerID: req.body.customerID,
    customerName: req.body.customerName,
    companyName:  req.body.companyName,
    companyAddress: req.body.companyAddress,
    leadID: req.body.leadID,
    mobileNumber: req.body.mobileNumber,
    emailId: req.body.emailId,
    date: req.body.date,
    allTotal: req.body.allTotal,
    subTotal: req.body.subTotal,
    tax: req.body.tax,
    requirements: req.body.requirements
  };
  Leads.findOneAndUpdate({
      _id: req.params.id
    }, {
      $push: {
        quotation: quotationData
      }
    },     function (err, leaddata) {
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


exports.deleteQuotation = function (req, res) {
  Leads.findById({
    _id: req.params.leadid
  }).select('quotation').exec(function (err, quotationData) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {
      var details = quotationData.quotation.id(req.params.id);
      details.remove();
      quotationData.save(function (err, data) {
        if (err) {
          res.status(500).send({
            "result": "error occured while deleteing the subcollection"
          });
        } else {
          Leads.find({ _id: req.params.leadid}).select('quotation').exec(function (err, data) {
            if (err) {
              res.status(500).send({
                "result": 'error occured while retreiving data'
              })
            } else {
              res.status(200).json(data[0].quotation);
            }
          });
        }
      })
    }
  });
};


  exports.viewQuotation = function (req, res) {
    Leads.find({
      _id: req.params.leadid
    }).select('quotation').exec(function (err, viewQuotation) {
      if (err) {
        res.status(500).send({
          message: "Some error occurred while retrieving notes."
        });
      } else {
        res.status(200).json(viewQuotation[0].quotation);
      }
    });
  };

  exports.viewSingleQuotation = function (req, res) {
    Leads.find({
      _id: req.params.leadid
    }).select('quotation').exec(function (err, viewQuotation) {
      if (err) {
        res.status(500).send({
          message: "Some error occurred while retrieving notes."
        });
      } else {
        var quotationData = viewQuotation[0].quotation.id(req.params.quoid);
        res.status(200).json(quotationData);
        console.log(quotationData);
      }
    });
  }

  exports.viewAllQuotation = function (req, res) {
    Leads.find({
    }).select('quotation').exec(function (err, viewQuotationData) {
      if (err) {
        res.status(500).send({
          message: "Some error occurred while retrieving notes."
        });
      } else {
        res.status(200).json(viewQuotationData);
      }
    });
  }; */
var Quotation = require('../model/quotation.model');
exports.createQuotation = function (req, res, bookingOrder) {
  var quotation = new Quotation();
  quotation.quotationID = bookingOrder,
    quotation.customerID = req.body.customerID,
    quotation.customerName = req.body.customerName,
    quotation.companyName = req.body.companyName,
    quotation.companyAddress = req.body.companyAddress,
    quotation.leadID = req.body.leadID,
    quotation.mobileNumber = req.body.mobileNumber,
    quotation.emailId = req.body.emailId,
    quotation.date = req.body.date,
    quotation.allTotal = req.body.allTotal,
    quotation.subTotal = req.body.subTotal,
    quotation.tax = req.body.tax,
    quotation.requirements = req.body.requirements
  quotation.save(function (err, data) {
    if (err) {
      res.status(500).send({
        "result": 'error occured while saving data'
      })
    } else {
      res.status(200).json(data);
    }
  })
}
exports.deleteQuotation = function (req, res) {
  Quotation.findByIdAndRemove(req.params.quoid, function (err, data) {
    if (err) {
      res.status(500).send({
        "result": 'error occured while deleting data'
      })
    } else {
      Quotation.find({}).select().exec(function (err, data) {
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
exports.viewQuotation = function (req, res) {
  Quotation.find({
    leadID: req.params.leadid
  }).select().exec(function (err, viewQuotation) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {
      res.status(200).json(viewQuotation);
    }
  });
};

exports.viewSingleQuotation = function (req, res) {
  Quotation.find({
    _id: req.params.quoid
  }).select().exec(function (err, quotationData) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {
      res.status(200).json(quotationData);
    }
  });
}

exports.viewAllQuotation = function (req, res) {
  Quotation.find({}).select().exec(function (err, viewQuotationData) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {
      res.status(200).json(viewQuotationData);
    }
  });
};
exports.updateQuotation = function (req, res) {
  Quotation.findById(req.params.id,function (err, quotation) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {

      quotation.quotationID = req.body.quotationID,
      quotation.customerID = req.body.customerID,
      quotation.customerName = req.body.customerName,
      quotation.companyName = req.body.companyName,
      quotation.companyAddress = req.body.companyAddress,
      quotation.leadID = req.body.leadID,
      quotation.mobileNumber = req.body.mobileNumber,
      quotation.emailId = req.body.emailId,
      quotation.date = req.body.date,
      quotation.allTotal = req.body.allTotal,
      quotation.subTotal = req.body.subTotal,
      quotation.tax = req.body.tax,
      quotation.requirements = req.body.requirements
      quotation.save(function (err, data) {
        if (err) {
          res.status(500).send({
            "result": "error occured while deleteing the subcollection"
          });
        } else {
          Quotation.find({}).select().exec(function (err, data) {
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
  Quotation.aggregate([
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
  ]).exec( function (err, quotationMonthData) {
    if (err) {
      res.status(500).send({
        "result": "error occured while finding the collection"
      });
    } else {
      if (quotationMonthData.length > 0) {
        res.status(200).json(quotationMonthData[0].monthCollection);
      } else { 
        res.status(200).json(quotationMonthData);
      }
    }
  });
}


exports.findtoDatefromDate = function (req, res) {
  Quotation.find({
    date: {
      $gte: req.body.fromDate, $lte: req.body.toDate
    }
  }).select().exec(function (err, quotationDateData) {
    if (err) {
      res.status(500).send({
        "result": "error occured while finding the collection"
      });
    } else {
      res.status(200).json(quotationDateData);
    }
  }
  );
}