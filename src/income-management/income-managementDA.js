var workorder = require('./../model/workorder.model');
var incomeDetail = require('./../model/income.model');

exports.findByDate = function(req, res){
    workorder.find({date:{
            $gte:req.body.fromDate,
            $lte:req.body.toDate
        }
    }).select().exec(function(error, result){
        if(error){
            res.status(500).send({
                message:'error occur'
            })
        }
        else{
            res.status(200).json(result);
        }
    })
}
exports.editIncome = function (req, res) {
  incomeDetail.find({"workOrderID": req.body.workOrderID}).select().exec(function(err, data){
    if(err){
      res.status(500).send({
        "message": "error occur"
      })
    }else{
      if(data.length === 0){
    var createIncome = new incomeDetail();  
    createIncome.workOrderID = req.body.workOrderID;
    createIncome.customerName = req.body.customerName;
    createIncome.date = req.body.date;
    createIncome.companyName = req.body.companyName;
    createIncome.modeOfPayment = req.body.modeOfPayment;
    createIncome.totalAmount = req.body.totalAmount;
    createIncome.paidAmount = req.body.paidAmount;
    createIncome.allTotal = req.body.allTotal;
    createIncome.paidAmount = req.body.paidAmount;
    createIncome.tds = req.body.tds;
    createIncome.balanceAmount = createIncome.allTotal - (createIncome.paidAmount + createIncome.tds);
    createIncome.gst = req.body.gst;
    createIncome.save(function(err, data) {
        if (err) {
          res.status(500).send({
            "result": 'error occured while saving data'
          })
        } else {
            incomeDetail.find({
              "_id": req.params.id
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
    }else{
      res.status(200).send(true);
    } }  })
  }
  exports.findallIncome = function(req, res){
      incomeDetail.find({}).select().exec(function(err, data){
          if(err){
              res.status(500).send({
                  "message": "error occured while finding data"
              })
          }
          else{
              res.status(200).json(data);
          }
      })
  }
  exports.findallIncomeWorkOder = function(req, res){
    workorder.find({}).select().exec(function(err, data){
        if(err){
            res.status(500).send({
                "message": "error occured while finding data"
            })
        }
        else{
            res.status(200).json(data);
        }
    })
}
exports.deleteCustomers = function (req, res) {
  workorder.findByIdAndRemove(req.params.id, function (err, data) {
      if (err) {
        res.status(500).send({
          "result": 'error occured while deleting data'
        })
      } else {
        workorder.find({}).collation({}).select().exec(function (err, data) {
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
  exports.deleteIncome = function(req, res){
    incomeDetail.findByIdAndRemove(req.params.id, function(err, data){
      if(err){
        res.status(500).send({
          "message": "error occure"
        })
      } else{
        incomeDetail.find({}).select().exec(function(err, data){
          if(err){
            res.status(500).send({
              "message": "error occured while retreiving data"
            })
          }
          else{
            res.status(200).json(data);
          }
        })
      }
    })
  }
  exports.editIncomeSheet = function(req, res){
    incomeDetail.findById({'_id': req.params.id}).select().exec(function(err, data){
      if(err){
        res.status(500).send({
          "message": "error occure while retreiving data"
        })
      }
      else{
        data.workOrderID = req.body.workOrderID;
        data.customerName = req.body.customerName;
        data.date = req.body.date;
        data.companyName = req.body.companyName;
        data.modeOfPayment = req.body.modeOfPayment;
        data.allTotal = req.body.allTotal;
        data.paidAmount = req.body.paidAmount;
        data.tds = req.body.tds;
        data.balanceAmount = data.allTotal - (data.paidAmount + data.tds);
        data.gst = req.body.gst;
        data.save(function(err, data){
          if(err){
            res.status(500).send({
              "message": " error occure while saving data"
            })
          }
          else{
            incomeDetail.find({}).select().exec(function(err, data){
              if(err){
                res.status(500).send({
                  "message": "error occure while retreiving data"
                })
              }
              else{
                res.status(200).json(data);
              }
            })
          }
        })
      }
    })
  }
  
  exports.findTDS = function(req, res){
    incomeDetail.find({
      tds:{
        $gt: 0
      }
    }).select().exec(function(err, data){
        if(err){
            res.status(500).send({
                "message": "error occured while finding data"
            })
        }
        else{
            res.status(200).json(data);
        }
    })
}