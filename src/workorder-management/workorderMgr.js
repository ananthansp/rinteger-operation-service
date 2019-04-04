var workorderDA = require('./workorderDA');
var zeroFill = require('zero-fill');
var WorkOrder = require('../model/workorder.model');

exports.createWorkOrder = function (req, res) {
  try {
      var currentDate = new Date();
      var day = currentDate.getDate();
      var month = currentDate.getMonth() + 1;
      var year = currentDate.getFullYear();
      var date = day + "/" + month + "/" + year;
      var oYear = year.toString();
      var orderYear = oYear.slice(-2);
      var order = "WO";
      var locale = "en-us";
      var result = currentDate.toLocaleString(locale, {
          month: "long"
      });
      var orderMonth = result.substr(0, 3).toUpperCase();
      WorkOrder.find().select().exec(function (err, details) {
          if (err) {
              res.status(500).send({
                  message: "Some error occurred while retrieving notes."
              });
          } else {
              if (details.length == 0) {
                  var bookingOrder = order + orderYear + orderMonth + "0001";
                  workorderDA.createWorkOrder(req, res, bookingOrder);
              } else {
                  var arrayLength = details.length - 1;
                  var maxID = details[arrayLength].workOrderID.substr(7, 4);
                  var incOrder = maxID.slice(-4);
                  var addZero = zeroFill(4, 1);
                  var result = parseInt(incOrder) + parseInt(addZero);
                  var results = zeroFill(4, result);
                  var bookingOrder = order + orderYear + orderMonth + results;
                  workorderDA.createWorkOrder(req, res, bookingOrder);
              }
          }
      })
  } catch (error) {
      console.log(error);
  }
}



exports.deleteWorkOrder = function (req, res) {
  try {
    workorderDA.deleteWorkOrder(req, res);
  } catch (error) {
    console.log(error)
  }
}
exports.findtoDatefromDate = function (req, res) {
  try {
    workorderDA.findtoDatefromDate(req, res);
  } catch (error) {
      console.log(error)
  }
}

exports.updateWorkOrder = function (req, res) {
  try {
    workorderDA.updateWorkOrder(req, res);
  } catch (error) {
    console.log(error)
  }
}
exports.deleteWorkOrderReq = function (req, res) {
  try {
    workorderDA.deleteWorkOrderReq(req, res);
  } catch (error) {
    console.log(error)
  }
}

exports.viewWorkOrder = function (req, res) {
  try {
    workorderDA.viewWorkOrder(req, res);
  } catch (error) {
    console.log(error)
  }
}

exports.viewSingleWorkOrder = function (req, res) {
  try {
    workorderDA.viewSingleWorkOrder(req, res);
  } catch (error) {
    console.log(error)
  }
}

exports.companyDetails = function (req, res) {
  try {
    workorderDA.companyDetails(req, res);
  } catch (error) {
    console.log(error)
  }
}
exports.viewAllWorkorder = function (req, res) {
  try {
    workorderDA.viewAllWorkorder(req, res);
  } catch (error) {
    console.log(error)
  }
 
}

exports.totalWorkOrder = function (req, res) {
  try {
    workorderDA.totalWorkOrder(req, res);
  } catch (error) {
    console.log(error)
  }
}
exports.findFromMonthToMonth = function (req, res) {
  try {
    workorderDA.findFromMonthToMonth(req, res);
  } catch (error) {
    console.log(error)
  }
}

exports.withOutGstWorkOrder = function (req, res) {
  try {
    workorderDA.withOutGstWorkOrder(req, res);
  } catch (error) {
    console.log(error)
  }
}
exports.withGstWorkOrder = function (req, res) {
  try {
    workorderDA.withGstWorkOrder(req, res);
  } catch (error) {
    console.log(error)
  }
}
exports.findWorkOrderUnit = function (req, res) {
  try {
    workorderDA.findWorkOrderUnit(req, res);
  } catch (error) {
      console.log(error)
  }
}