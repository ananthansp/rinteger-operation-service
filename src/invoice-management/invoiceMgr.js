var Leads = require('../model/lead.model');
var zeroFill = require('zero-fill');
var invoiceDA = require('./invoiceDA');
/* exports.createInvoice = function (req, res) {
  try {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var date = day + "/" + month + "/" + year;


    var oYear = year.toString();
    var orderYear = oYear.slice(-2);
    var order = "INV";
    var locale = "en-us";
    var result = currentDate.toLocaleString(locale, {
      month: "long"
    });
    var orderMonth = result.substr(0, 3).toUpperCase();
    Leads.aggregate([{
        $unwind: "$invoice"
      },       {
        $group: {
          _id: '',
          count: {
            $sum: 1
          }
        }
      }
    ]).exec(function (err, total) {
      if (err) {
        console.log(err);
      } else {
        console.log(total);
        if (total.length == 0) {
          var bookingOrder = order + orderYear + orderMonth + "0001";
          invoiceDA.createInvoice(req, res, date, bookingOrder);

        } else {
          var maxID = total[0].count + 1;
          var results = zeroFill(4, maxID);
          var bookingOrder = order + orderYear + orderMonth + results;
          invoiceDA.createInvoice(req, res, date, bookingOrder);
        }
      }
    })
  } catch (error) {
    console.log(error);
  }
} */
var zeroFill = require('zero-fill');
var Invoice = require('../model/invoice.model');

exports.createInvoice = function (req, res) {
  try {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var date = day + "/" + month + "/" + year;
    var oYear = year.toString();
    var orderYear = oYear.slice(-2);
    var order = "INV";
    var locale = "en-us";
    var result = currentDate.toLocaleString(locale, {
      month: "long"
    });
    var orderMonth = result.substr(0, 3).toUpperCase();
    Invoice.find().select().exec(function (err, details) {
      if (err) {
        res.status(500).send({
          message: "Some error occurred while retrieving notes."
        });
      } else {
        if (details.length == 0) {
          var bookingOrder = order + orderYear + orderMonth + "0001";
          invoiceDA.createInvoice(req, res, bookingOrder);
        } else {
          var arrayLength = details.length - 1;
          var maxID = details[arrayLength].invoiceID.substr(8, 4);
          var incOrder = maxID.slice(-4);
          var addZero = zeroFill(4, 1);
          var result = parseInt(incOrder) + parseInt(addZero);
          var results = zeroFill(4, result);
          var bookingOrder = order + orderYear + orderMonth + results;
          invoiceDA.createInvoice(req, res, bookingOrder);
        }
      }
    })
  } catch (error) {
    console.log(error);
  }
}

exports.deleteInvoice = function (req, res) {
  try {
    invoiceDA.deleteInvoice(req, res);
  } catch (error) {
    console.log(error)
  }
}
exports.viewInvoice = function (req, res) {
  try {
    invoiceDA.viewInvoice(req, res);
  } catch (error) {
    console.log(error)
  }
}
exports.viewSingleInvoice = function (req, res) {
  try {
    invoiceDA.viewSingleInvoice(req, res);
  } catch (error) {
    console.log(error)
  }
}

exports.viewAllInvoice = function (req, res) {
  try {
    invoiceDA.viewAllInvoice(req, res);
  } catch (error) {
    console.log(error)
  }
}
exports.updateInvoice = function (req, res) {
  try {
    invoiceDA.updateInvoice(req, res);
  } catch (error) {
    console.log(error)
  }
}

exports.findtoDatefromDate = function (req, res) {
  try {
    invoiceDA.findtoDatefromDate(req, res);
  } catch (error) {
      console.log(error)
  }
}

exports.findFromMonthToMonth = function (req, res) {
  try {
    invoiceDA.findFromMonthToMonth(req, res);
  } catch (error) {
      console.log(error)
  }
}
