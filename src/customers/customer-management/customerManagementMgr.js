var customerManagementDA = require('./customerManagementDA');
var zeroFill = require('zero-fill');
var Customer = require('../../model/customerDB.model');

exports.createCustomer = function (req, res) {
    try {
        var currentDate = new Date();
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1;
        var year = currentDate.getFullYear();
        var date = day + "/" + month + "/" + year;


        var oYear = year.toString();
        var orderYear = oYear.slice(-2);
        var order = "CUS";
        var locale = "en-us";
        var result = currentDate.toLocaleString(locale, {
            month: "long"
        });
        var orderMonth = result.substr(0, 3).toUpperCase();
        Customer.find({}).select().exec(function (err, details) {
            if (err) {
                res.status(500).send({
                    message: "Some error occurred while retrieving notes."
                });
            } else {
                if (details.length == 0) {
                    var bookingOrder = order + orderYear + orderMonth + "0001";
                    customerManagementDA.createCustomer(req, res, date, bookingOrder);
                } else {
                    var arrayLength = details.length - 1;
                    var maxID = details[arrayLength].customerID.substr(8, 4);
                    console.log(details[arrayLength].customerID);
                    var incOrder = maxID.slice(-4);
                    var addZero = zeroFill(4, 1);
                    var result = parseInt(incOrder) + parseInt(addZero);
                    var results = zeroFill(4, result);
                    var bookingOrder = order + orderYear + orderMonth + results;
                    customerManagementDA.createCustomer(req, res, date, bookingOrder);
                }
            }

        })
    } catch (error) {
        console.log(error);
    }
}



exports.viewCustomers = function (req, res) {
    try {
        customerManagementDA.viewCustomers(req, res);
    } catch (error) {
        console.log(error)
    }
}

exports.deleteCustomers = function (req, res) {
    try {
        customerManagementDA.deleteCustomers(req, res);
    } catch (error) {
        console.log(error)
    }
}
exports.multipleCustomer = function (req, res) {
    try {
        var currentDate = new Date();
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1;
        var year = currentDate.getFullYear();
        var date = day + "/" + month + "/" + year;


        var oYear = year.toString();
        var orderYear = oYear.slice(-2);
        var order = "CUS";
        var locale = "en-us";
        var result = currentDate.toLocaleString(locale, {
            month: "long"
        });
        var orderMonth = result.substr(0, 3).toUpperCase();


        Customer.find().select().exec(function (err, details) {
            if (err) {
                res.status(500).send({
                    message: "Some error occurred while retrieving notes."
                });
            } else {
                if (details.length == 0) {
                    var bookingOrder = order + orderYear + orderMonth + "0001";
                    customerManagementDA.multipleCustomer(req, res, date, bookingOrder);
                } else {
                    var arrayLength = details.length - 1;
                    var maxID = details[arrayLength].customerID.substr(8, 4);
                    var incOrder = maxID.slice(-4);
                    var addZero = zeroFill(4, 1);
                    var result = parseInt(incOrder) + parseInt(addZero);
                    var results = zeroFill(4, result);
                    var bookingOrder = order + orderYear + orderMonth + results;
                    customerManagementDA.multipleCustomer(req, res, date, bookingOrder);
                }
            }

        })
    } catch (error) {
        console.log(error);
    }
}

exports.editCustomer = function (req, res) {
    try {
        customerManagementDA.editCustomer(req, res);
    } catch (error) {
        console.log(error)
    }
}

exports.checkCustomers = function (req, res) {
    try {
        customerManagementDA.checkCustomers(req, res);
    } catch (error) {
        console.log(error)
    }
}

exports.viewSingleCustomer = function (req, res) {
    try {
        customerManagementDA.viewSingleCustomer(req, res);
    } catch (error) {
        console.log(error)
    }
}
exports.customerDetails = function (req, res) {
    try {
        customerManagementDA.customerDetails(req, res);
    } catch (error) {
        console.log(error)
    }
}
