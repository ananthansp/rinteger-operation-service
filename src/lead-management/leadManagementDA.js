var Leads = require('../model/lead.model');
var Customer = require('../model/customerDB.model');
var Quotation = require('../model/quotation.model');
var FollowUp = require('../model/follow-up.model');

exports.createLeads = function (req, res, date, bookingOrder) {
  var lead = new Leads(req.body);
  lead.leadID = bookingOrder;
  /* lead.date = date; */
  lead.workOrderStatus = 'Not Created'
  lead.save(function (err, data) {
    if (err) {
      res.status(500).send({
        "result": 'error occured while saving data'
      })
    } else {
      Leads.findOneAndUpdate({
        leadID: bookingOrder
      }, {
          $push: {
            details: {
              $each: req.body.requirements
            }
          }
        },
        function (err, leaddata) {
          if (err) { // if it contains error return 0
            console.log(err)
          } else {

            Leads.find({}).select({}).exec(function (err, data) {
              if (err) {
                res.status(500).send({
                  "result": 'error occured while retreiving data'
                })
              } else {
                res.status(200).json(data);
              }
            });

          }
        }
      )
    }
  })
}

exports.viewLeads = function (req, res) {
  Leads.find({ workOrderStatus: 'Not Created' }).select().exec(function (err, data) {
    if (err) {
      res.status(500).send({
        "result": 'error occured while retreiving data'
      })
    } else {
      res.status(200).json(data);
    }
  });
}
exports.viewLead = function (req, res) {
  Leads.find({
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

exports.deleteLeads = function (req, res) {
  Leads.findByIdAndRemove(req.params.id, function (err, data) {
    if (err) {
      res.status(500).send({
        "result": 'error occured while deleting data'
      })
    } else {
      Leads.find({ workOrderStatus: 'Not Created' }).select().exec(function (err, data) {
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

exports.editLeads = function (req, res) {
  Leads.findById(req.params.id, function (err, leaddata) {
    if (err) {
      res.status(500).send({
        "result": "error occured while editing the data"
      })
    } else {
      leaddata.mobileNumber = req.body.mobileNumber;
      leaddata.emailId = req.body.emailId;
      leaddata.name = req.body.name;
      leaddata.leadOwner = req.body.leadOwner;
      leaddata.leadSource = req.body.leadSource;
      leaddata.leadStatus = req.body.leadStatus;
      leaddata.leadType = req.body.leadType;
      leaddata.service = req.body.service;
      leaddata.leadUnit = req.body.leadUnit;
      leaddata.date = req.body.date;
      leaddata.remarks = req.body.remarks;
      leaddata.followUp = req.body.followUp;
      leaddata.save(function (err, data) {
        if (err) {
          res.status(500).send({
            "result": "error occured while editing the data"
          })
        } else {
          Leads.find({
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
      });
    }
  });

}
exports.editRequirements = function (req, res) {
  Leads.findById(req.params.id, function (err, leaddata) {
    if (err) {
      res.status(500).send({
        "result": "error occured while editing the data"
      })
    } else {
      var requirementDetail = leaddata.requirements.id(req.params.reqid);
      requirementDetail.item = req.body.item;
      requirementDetail.quantity = req.body.quantity;
      requirementDetail.discount = req.body.discount;
      requirementDetail.taxRate = req.body.taxRate;
      requirementDetail.total = req.body.total;
      requirementDetail.description = req.body.description;
      leaddata.save(function (err, data) {
        if (err) {
          res.status(500).send({
            "result": "error occured while editing the data"
          })
        } else {
          Leads.find({
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
      })
    }
  });
}



exports.createQuotation = function (req, res, date, bookingOrder) {
  let quotationData = {
    customerID: req.body.customerID,
    leadID: req.body.leadID,
    name: req.body.name,
    mobileNumber: req.body.mobileNumber,
    date: req.body.date,
    expiryDate: req.body.expiryDate,
    quotationID: bookingOrder,
    status: req.body.status
  };
  Leads.findOneAndUpdate({
    _id: req.params.id
  }, {
      $push: {
        quotation: quotationData
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

exports.addRequirements = function (req, res) {
  let requirementDetails = {
    item: req.body.item,
    quantity: req.body.quantity,
    price: req.body.price,
    discount: req.body.discount,
    taxRate: req.body.taxRate,
    total: req.body.total,
    description: req.body.description
  };
  Leads.findOneAndUpdate({
    _id: req.params.id
  }, {
      $push: {
        requirements: requirementDetails
      }
    },
    function (err, leadDetails) {
      if (err) { // if it contains error return 0
        res.status(500).send({
          "result": 0
        });
      } else {

        //res.status(200).json(mainCatValue.mainCategory[mainCatValue.mainCategory.length -1]);
        Leads.find({
          '_id': req.params.id
        }, function (err, data) {
          if (err) {
            res.status(500).send({
              "result": 0
            });
          } else {

            res.status(200).json(data);
          }
        });
      }
    }
  )
}
exports.deleteRequirements = function (req, res) {
  Leads.findById({
    '_id': req.params.leadid
  }, function (err, leadData) {
    if (err) {
      res.status(500).send({
        "result": "error occured while finding the collection"
      });
    } else {
      var details = leadData.details.id(req.params.id);
      details.remove();
      leadData.save(function (err, data) {
        if (err) {
          res.status(500).send({
            "result": "error occured while deleteing the subcollection"
          });
        } else {
          Leads.find({
            '_id': req.params.leadid
          }).select().exec(function (err, data) {
            if (err) {
              res.status(500).send({
                "result": 'error occured while retreiving data'
              })
            } else {
              res.status(200).json(data);
              /* console.log(data); */
            }
          });
        }
      })
    }
  })
}

exports.addFollowUp = function (req, res) {
  let followUpDetails = {
    date: req.body.date,
    upcomingDate: req.body.upcomingDate,
    remarks: req.body.remarks
  };

  Leads.findOneAndUpdate({
    '_id': req.params.id
  }, {
      $push: {
        followUp: followUpDetails
      }
    },
    function (err, leaddata) {
      if (err) { // if it contains error return 0
        console.log(err)
      } else {

        Leads.find({ workOrderStatus: 'Not Created' }).select().exec(function (err, data) {
          if (err) {
            res.status(500).send({
              "result": 'error occured while retreiving data'
            })
          } else {
            res.status(200).json(data);
          }
        });

      }
    }
  )

}
exports.editFollowUp = function (req, res) {
  Leads.findById(req.params.id, function (err, leaddata) {
    if (err) {
      res.status(500).send({
        "result": "error occured while editing the data"
      })
    } else {
      var followUpDetail = leaddata.followUp.id(req.params.followid);
      followUpDetail.date = req.body.date;
      followUpDetail.upcomingDate = req.body.upcomingDate;
      followUpDetail.remarks = req.body.remarks;
      leaddata.save(function (err, data) {
        if (err) {
          res.status(500).send({
            "result": "error occured while editing the data"
          })
        } else {
          Leads.find({
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
      });
    }
  });
}
exports.deleteFollowUp = function (req, res) {
  Leads.findById({
    '_id': req.params.leadid
  }, function (err, leadData) {
    if (err) {
      res.status(500).send({
        "result": "error occured while finding the collection"
      });
    } else {
      var followUp = leadData.followUp.id(req.params.id);
      followUp.remove();
      leadData.save(function (err, data) {
        if (err) {
          res.status(500).send({
            "result": "error occured while deleteing the subcollection"
          });
        } else {
          Leads.find({
            '_id': req.params.leadid
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
      })
    }
  })
}

exports.findLeadSource = function (req, res) {
  Leads.find({
    'leadSource': req.params.source
  }, function (err, leadSourceData) {
    if (err) {
      res.status(500).send({
        "result": "error occured while finding the collection"
      });
    } else {
      res.status(200).json(leadSourceData);
    }
  })
}

exports.findLeadStatus = function (req, res) {
  Leads.find({
    'leadStatus': req.params.status
  }, function (err, leadStatusData) {
    if (err) {
      res.status(500).send({
        "result": "error occured while finding the collection"
      });
    } else {
      res.status(200).json(leadStatusData);
    }
  })
}


exports.findLeadStatus = function (req, res) {
  Leads.find({
    'leadStatus': req.params.status
  }, function (err, leadStatusData) {
    if (err) {
      res.status(500).send({
        "result": "error occured while finding the collection"
      });
    } else {
      res.status(200).json(leadStatusData);
    }
  });
}




exports.findtoDatefromDate = function (req, res) {

  Leads.find({
    "followUp.upcomingDate": {
      $gte: req.body.fromDate,
      $lte: req.body.toDate
    }
  }).populate('followUp').select().exec(function (err, data) {
    if (err) {
      res.status(500).send({
        "message": "error occure while retriving"
      })
    } else {
      res.status(200).json(data);
    }
  })
}

exports.findFromMonthToMonth = function (req, res) {
  Leads.aggregate([
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
  ]).exec(function (err, leadMonthData) {
    if (err) {
      res.status(500).send({
        "result": "error occured while finding the collection"
      });
    } else {
      if (leadMonthData.length > 0) {
        res.status(200).json(leadMonthData[0].monthCollection);
      } else {
        res.status(200).json(leadMonthData);
      }
    }
  });
}


exports.findLeadUnit = function (req, res) {
  Leads.find({
    'leadUnit': req.params.status
  }, function (err, leadStatusData) {
    if (err) {
      res.status(500).send({
        "result": "error occured while finding the collection"
      });
    } else {
      res.status(200).json(leadStatusData);
    }
  });
}