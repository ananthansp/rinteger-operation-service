/* var quotationDA = require('./quotationDA');
var zeroFill = require('zero-fill');
var Leads = require('../model/lead.model');

exports.createQuotation = function (req, res) {
  try {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var date = day + "/" + month + "/" + year;


    var oYear = year.toString();
    var orderYear = oYear.slice(-2);
    var order = "QUO";
    var locale = "en-us";
    var result = currentDate.toLocaleString(locale, {
      month: "long"
    });
    var orderMonth = result.substr(0, 3).toUpperCase();
    Leads.aggregate([{
        $unwind: "$quotation"
      },
      {
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
        
        if (total.length == 0) {
          var bookingOrder = order + orderYear + orderMonth + "0001";
          quotationDA.createQuotation(req, res, date, bookingOrder);

        } else {
          var maxID = total[0].count + 1;
          var results = zeroFill(4, maxID);
          var bookingOrder = order + orderYear + orderMonth + results;
          quotationDA.createQuotation(req, res, date, bookingOrder);
        }
      }
    })
  } catch (error) {
    console.log(error);
  }
}
exports.deleteQuotation = function (req, res) {
  try {
    quotationDA.deleteQuotation(req, res);
  } catch (error) {
    console.log(error)
  }
}

exports.viewQuotation = function (req, res) {
  try {
    quotationDA.viewQuotation(req, res);
  } catch (error) {
    console.log(error)
  }
}

exports.viewSingleQuotation = function (req, res) {
  try {
    quotationDA.viewSingleQuotation(req, res);
  } catch (error) {
    console.log(error)
  }
}
exports.viewAllQuotation = function (req, res) {
  try {
    quotationDA.viewAllQuotation(req, res);
  } catch (error) {
    console.log(error)
  }
}
 */

var quotationDA = require('./quotationDA');
var zeroFill = require('zero-fill');
var Quotation = require('../model/quotation.model');

exports.createQuotation = function (req, res) {
  try {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var date = day + "/" + month + "/" + year;
    var oYear = year.toString();
    var orderYear = oYear.slice(-2);
    var order = "QUO";
    var locale = "en-us";
    var result = currentDate.toLocaleString(locale, {
      month: "long"
    });
    var orderMonth = result.substr(0, 3).toUpperCase();
    Quotation.find().select().exec(function (err, details) {
      if (err) {
        res.status(500).send({
          message: "Some error occurred while retrieving notes."
        });
      } else {
        if (details.length == 0) {
          var bookingOrder = order + orderYear + orderMonth + "0001";
          quotationDA.createQuotation(req, res, bookingOrder);
        } else {
          var arrayLength = details.length - 1;
          var maxID = details[arrayLength].quotationID.substr(8, 4);
          var incOrder = maxID.slice(-4);
          var addZero = zeroFill(4, 1);
          var result = parseInt(incOrder) + parseInt(addZero);
          var results = zeroFill(4, result);
          var bookingOrder = order + orderYear + orderMonth + results;
          quotationDA.createQuotation(req, res, bookingOrder);
        }
      }
    })
  } catch (error) {
    console.log(error);
  }
}

exports.deleteQuotation = function (req, res) {
  try {
    quotationDA.deleteQuotation(req, res);
  } catch (error) {
    console.log(error)
  }
}

exports.viewQuotation = function (req, res) {
  try {
    quotationDA.viewQuotation(req, res);
  } catch (error) {
    console.log(error)
  }
}

exports.viewSingleQuotation = function (req, res) {
  try {
    quotationDA.viewSingleQuotation(req, res);
  } catch (error) {
    console.log(error)
  }
}
exports.viewAllQuotation = function (req, res) {
  try {
    quotationDA.viewAllQuotation(req, res);
  } catch (error) {
    console.log(error)
  }
}
exports.updateQuotation = function (req, res) {
  try {
    quotationDA.updateQuotation(req, res);
  } catch (error) {
    console.log(error)
  }
}

exports.findFromMonthToMonth = function (req, res) {
  try {
    quotationDA.findFromMonthToMonth(req, res);
  } catch (error) {
      console.log(error)
  }
}

exports.findtoDatefromDate = function (req, res) {
  try {
    quotationDA.findtoDatefromDate(req, res);
  } catch (error) {
      console.log(error)
  }
}
