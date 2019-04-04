var proformaInvoiceDA = require('./proformaInvoiceDA')
var ProfomaInvoice = require('../model/profomainvoice.model');
/* 
var zeroFill = require('zero-fill');

exports.createProformaInvoice = function (req, res) {
  try {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var date = day + "/" + month + "/" + year;


    var oYear = year.toString();
    var orderYear = oYear.slice(-2);
    var order = "PINV";
    var locale = "en-us";
    var result = currentDate.toLocaleString(locale, {
      month: "long"
    });
    var orderMonth = result.substr(0, 3).toUpperCase();
    Leads.aggregate([{
        $unwind: "$proformaInvoice"
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
          proformaInvoiceDA.createProformaInvoice(req, res, date, bookingOrder);
        } else {
          var maxID = total[0].count + 1;
          var results = zeroFill(4, maxID);
          var bookingOrder = order + orderYear + orderMonth + results;
          
          proformaInvoiceDA.createProformaInvoice(req, res, date, bookingOrder);
        }
      }
    })
  } catch (error) {
    console.log(error);
  }
}

exports.deleteProformaInvoice = function (req, res) {
    try {
        proformaInvoiceDA.deleteProformaInvoice(req, res);
    } catch (error) {
        console.log(error)
    }
  }
  exports.viewProforma = function (req, res) {
    try {
        proformaInvoiceDA.viewProforma(req, res);
    } catch (error) {
        console.log(error)
    }
  }
  exports.viewSingleProformaInvoice = function (req, res) {
    try {
        proformaInvoiceDA.viewSingleProformaInvoice(req, res);
    } catch (error) {
        console.log(error)
    }
  }

  exports.viewAllProforma = function (req, res) {
    try {
      proformaInvoiceDA.viewAllProforma(req, res);
    } catch (error) {
        console.log(error)
    }
  } */


/*   var Leads = require('../model/lead.model');
var zeroFill = require('zero-fill');
var invoiceDA = require('./invoiceDA'); */
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


exports.createProformaInvoice = function (req, res) {
  try {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var date = day + "/" + month + "/" + year;
    var oYear = year.toString();
    var orderYear = oYear.slice(-2);
    var order = "PINV";
    var locale = "en-us";
    var result = currentDate.toLocaleString(locale, {
      month: "long"
    });
    var orderMonth = result.substr(0, 3).toUpperCase();
    ProfomaInvoice.find().select().exec(function (err, details) {
      if (err) {
        res.status(500).send({
          message: "Some error occurred while retrieving notes."
        });
      } else {
        if (details.length == 0) {
          var bookingOrder = order + orderYear + orderMonth + "0001";
          proformaInvoiceDA.createProformaInvoice(req, res, bookingOrder);
        } else {
          var arrayLength = details.length - 1;
          var maxID = details[arrayLength].proformaInvoiceID.substr(9, 4);
          var incOrder = maxID.slice(-4);
          var addZero = zeroFill(4, 1);
          var result = parseInt(incOrder) + parseInt(addZero);
          var results = zeroFill(4, result);
          var bookingOrder = order + orderYear + orderMonth + results;
          proformaInvoiceDA.createProformaInvoice(req, res, bookingOrder);
        }
      }
    })
  } catch (error) {
    console.log(error);
  }
}

exports.deleteProformaInvoice = function (req, res) {
  try {
    proformaInvoiceDA.deleteProformaInvoice(req, res);
  } catch (error) {
    console.log(error)
  }
}
exports.viewProforma = function (req, res) {
  try {
    proformaInvoiceDA.viewProforma(req, res);
  } catch (error) {
    console.log(error)
  }
}
exports.viewSingleProformaInvoice = function (req, res) {
  try {
    proformaInvoiceDA.viewSingleProformaInvoice(req, res);
  } catch (error) {
    console.log(error)
  }
}

exports.viewAllProforma = function (req, res) {
  try {
    proformaInvoiceDA.viewAllProforma(req, res);
  } catch (error) {
    console.log(error)
  }
}
exports.updateProfomaInvoice = function (req, res) {
  try {
    proformaInvoiceDA.updateProfomaInvoice(req, res);
  } catch (error) {
    console.log(error)
  }
}
exports.findtoDatefromDate = function (req, res) {
  try {
    proformaInvoiceDA.findtoDatefromDate(req, res);
  } catch (error) {
      console.log(error)
  }
}
exports.findFromMonthToMonth = function (req, res) {
  try {
    proformaInvoiceDA.findFromMonthToMonth(req, res);
  } catch (error) {
      console.log(error)
  }
}