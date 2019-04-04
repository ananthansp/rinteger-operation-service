var expenseDetail = require('../model/expense.model');


exports.createExpense = function(req,res,bookingOrder){
    var createexpense = new expenseDetail();  
    createexpense.mobileNumber = req.body.mobileNumber,
    createexpense.name = req.body.name,
    createexpense.companyName = req.body.companyName,
    createexpense.expenseType = req.body.expenseType,
    createexpense.modeOfPayment = req.body.modeOfPayment,
    createexpense.location = req.body.location,
    createexpense.date = req.body.date,
    createexpense.totalAmount = req.body.totalAmount,
    createexpense.paid = req.body.paid,
    createexpense.balance =createexpense.totalAmount-createexpense.paid,
    createexpense.vouNo = req.body.vouNo,
    createexpense.expensesDescription = req.body.expensesDescription,
    createexpense.gst = req.body.gst
    createexpense.save(function(err, data) {
        if (err) {
          res.status(500).send({
            "result": 'error occured while saving data'
          })
        } else {
            expenseDetail.find({}).select().exec(function (err, data) {
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
exports.viewAllExpense = function (req, res) {
    expenseDetail.find({}).select().exec(function (err, data) {
      if (err) {
        res.status(500).send({
          message: "Some error occurred while retrieving notes."
        });
      } else {
        res.status(200).json(data);
      }
    });
  }

  exports.deleteExpense = function (req, res) {
    expenseDetail.findByIdAndRemove(req.params.id, function (err, data) {
      if (err) {
        res.status(500).send({
          "result": 'error occured while deleting data'
        })
      } else {
        expenseDetail.find({}).select().exec(function (err, data) {
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
  
  exports.editExpense = function (req, res) {
    expenseDetail.findById({
      '_id': req.params.id
    }, function (err, data) {
      if (err) {
        res.status(500).send({
          "result": 'error occured while retreiving data'
        })
      } else {
       
        data.mobileNumber = req.body.mobileNumber; 
        data.name = req.body.name;
        data.companyName = req.body.companyName;
        data.expenseType = req.body.expenseType;
        data.modeOfPayment = req.body.modeOfPayment;
        data.location = req.body.location;
        data.date = req.body.date;
        data.totalAmount = req.body.totalAmount;
        data.paid = req.body.paid;
        data.balance = data.totalAmount-data.paid;
        data.vouNo = req.body.vouNo;
        data.expensesDescription = req.body.expensesDescription;
        data.gst = req.body.gst;
        data.save(function (err, details) {
          if (err) {
            res.status(500).send({
              "result": 'error occured while retreiving data'
            })
  
          } else {
            expenseDetail.find({}).select().exec(function (err, data) {
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


  exports.viewSingleExpense = function (req, res) {
    expenseDetail.find({
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
/*   exports.getBalance =function(req,res){

  } */
  exports.filterByType = function (req, res) {
    expenseDetail.find({"expenseType":req.body.expenseType}).select().exec(function (err, data) {
      if (err) {
        res.status(500).send({
          message: "Some error occurred while retrieving notes."
        });
      } else {
        res.status(200).json(data);
        console.log(data);
      }
    });
  }

  exports.dateFilter = function (req, res) {
    expenseDetail.find({date:{
      $gte:req.body.fromDate,
      $lt: req.body.toDate
  }}).select().exec(function (err, data) {
      if (err) {
        res.status(500).send({
          message: "Some error occurred while retrieving notes."
        });
      } else {
        res.status(200).json(data);
      }
    });
  }
  exports.tdsfilter = function (req, res) {
    expenseDetail.find({totalAmount:{
      $gt : 3000
    }}).select().exec(function (err, data) {
      if (err) {
        res.status(500).send({
          message: "Some error occurred while retrieving notes."
        });
      } else {
        res.status(200).json(data);
      }
    });
  }

  exports.gstFilter = function(req,res){
    expenseDetail.find({gst:"With GST"}).select().exec(function(err,data){
      if(err){
        res.status(500).send({
          message: "Some error occurred while retrieving notes."
        });
        
      }else{
        res.status(200).json(data);
      }
    })
  }