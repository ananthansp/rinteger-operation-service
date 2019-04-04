var MaterialDetail = require('../model/material.model');
var WorkOrderDetail = require('./../model/workorder.model');
var IncomeDetail = require('../model/income.model');

exports.CreateMaterial = function (req, res) {
  var materialDetail = new MaterialDetail(req.body); 
  materialDetail.id = req.body.id
 materialDetail.save(function (err, data) {
    if (err) {
      res.status(500).send({
        "result": 'error occured while saving data'
      })
    } else {
      MaterialDetail.findByIdAndUpdate({
        id: req.body.id
      }, {
          $push: {
            product: {
              $each: req.body.product
            }
          }
        },
        function (err, data) {
          if (err) { 
            res.status(500).send({
              "message": "error occured while retreiving data"
            })
          } else {

            MaterialDetail.find({}).select({}).exec(function (err, data) {
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
/* exports.CreateMaterial = function(req, res){
    MaterialDetail.find({"workOrderID":req.body.workOrderID}).select().exec(function(err, data){
        if(err){
            res.status(500).send({
                "message": "error occure while find the data"
            })
        }
        else{
            if(data.length === 0){
                var createMaterial = new MaterialDetail();
                createMaterial.workOrderID = req.body.workOrderID;
                createMaterial.DCnumber = req.body.DCnumber;
                createMaterial.date = req.body.date;
                createMaterial.customerName = req.body.customerName;
                createMaterial.receivedBy = req.body.receivedBy;                
                createMaterial.shootStatus = req.body.shootStatus;
                createMaterial.paymentStatus = req.body.paymentStatus;
                createMaterial.modeOfInward = req.body.modeOfInward;               
                createMaterial.modeOfOutward = req.body.modeOfOutward;
                createMaterial.materialStatus = req.body.materialStatus;
                createMaterial.remark = req.body.remark;
                createMaterial.product = req.body.product;
                createMaterial.save(function(err, data){
                    if(err){
                        res.status(500).send({
                            "message": "error occure while saveing data"
                        })
                    }else{
                        MaterialDetail.find({}).select().exec(data =>{
                            if(err){
                                res.status(500).send({
                                    "message": "error occure while find data"
                                })
                            }
                            else{
                                res.status(200).json(data);
                            }
                        })
                    }
                })

            }
            else{
                res.status(200).send(true);
            }
        }
    })

} */
exports.getAllMaterial = function(req, res){
    MaterialDetail.find({}).select().exec(function(err, data){
        if(err){
            res.status(500).send({
                "message": "error occure while find data"
            })
        }
        else{
            res.status(200).json(data);
        }
    })
}
exports.getSingleMaterial = function(req, res){
    MaterialDetail.find({
        '_id': req.params.id
    }).select().exec(function(err, data){
        if(err){
            res.status(500).send({
                "message": "error occure while find data"
            })
        }
        else{
            res.status(200).json(data);
            console.log(data);
        }
    })
}

exports.findAllWorkorder = function(req, res){
    WorkOrderDetail.find({}).select().exec(function(err, data){
        if(err){
            res.status(500).send({
                "message": "error occure while retriving data"
            })
        }
        else{
            res.status(200).json(data);
        }
    })
}
exports.editMaterialSheet = function(req, res){
    MaterialDetail.findByIdAndUpdate({'_id': req.params.id}).select().exec(function(err, data){
      if(err){
        res.status(500).send({
          "message": "error occure while retreiving data"
        })
      }
      else{
        data.workOrderID = req.body.workOrderID;
        data.DCnumber = req.body.DCnumber;
        data.date = req.body.date;
        data.customerName = req.body.customerName;       
        data.receivedBy = req.body.receivedBy;
        data.unit = req.body.unit;
       /*  data.productType = req.body.productType;
        data.noOfProduct = req.body.noOfProduct;
        data.shootType = req.body.shootType; */
        data.shootStatus = req.body.shootStatus;
        data.paymentStatus = req.body.paymentStatus;
        data.modeOfInward = req.body.modeOfInward;
        data.modeOfOutward = req.body.modeOfOutward;
        data.dispatchType = req.body.dispatchType;
        data.materialStatus = req.body.materialStatus;
        data.remark = req.body.remark;
        data.product = req.body.product;
        data.save(function(err, data){
          if(err){
            res.status(500).send({
              "message": " error occure while saving data"
            })
          }
          else{
            MaterialDetail.find({}).select().exec(function(err, data){
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
  exports.editProduct = function (req, res) {
    MaterialDetail.findById(req.params.id, function (err, data) {
      if (err) {
        res.status(500).send({
          "result": "error occured while editing the data"
        })
      } else {
        var productDetail = data.product.id(req.params.id);
        productDetail.productType = req.body.productType;
        productDetail.noOfProduct = req.body.noOfProduct;       
        data.save(function (err, data) {
          if (err) {
            res.status(500).send({
              "result": "error occured while editing the data"
            })
          } else {
            MaterialDetail.find({
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
  exports.deleteMaterial = function(req, res){
    MaterialDetail.findByIdAndRemove(req.params.id, function(err, data){
      if(err){
        res.status(500).send({
          "message": "error occure"
        })
      } else{
        MaterialDetail.find({}).select().exec(function(err, data){
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
  exports.deleteWorkorder = function(req, res){
    WorkOrderDetail.findByIdAndRemove(req.params.id, function(err, data){
      if(err){
        res.status(500).send({
          "message": "error occure"
        })
      } else{
        WorkOrderDetail.find({}).select().exec(function(err, data){
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

  exports.findByDate = function(req, res){
    WorkOrderDetail.find({date:{
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
exports.findByDateMaterial = function(req, res){
    MaterialDetail.find({date:{
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
exports.findByDateSingleMaterial = function(req, res){
    MaterialDetail.find({"date": req.body.finddate}).select().exec(function(err, data){
        if(err){
            res.status(500).send({
                "message": "error occure while retriving data"
            })
        }
        else{
            res.status(200).json(data);
        }
    })
}

exports.filterByShootStatus = function (req, res) {
    MaterialDetail.find({"shootStatus":req.body.shootStatus}).select().exec(function (err, data) {
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
  exports.filterByPaymentStatus = function (req, res) {
    MaterialDetail.find({"paymentStatus":req.body.paymentStatus}).select().exec(function (err, data) {
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
  exports.filterByShootType = function (req, res) {
    MaterialDetail.find({"shootType":req.body.shootType}).select().exec(function (err, data) {
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
  exports.filterByDispatchType = function (req, res) {
    MaterialDetail.find({"dispatchType":req.body.dispatchType}).select().exec(function (err, data) {
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
  exports.filterByMaterialStatus = function (req, res) {
    MaterialDetail.find({"materialStatus":req.body.materialStatus}).select().exec(function (err, data) {
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

  exports.findPaymentStatus = function(req, res){
    IncomeDetail.find({ "workOrderID": req.params.workOrderID }).select().exec(function(err, data){
      if(err){
        res.status(500).send({
          "message": "error occure while retreiving data"
        })
      }
      else{
        res.status(200).send(data);
      }
    })
  }