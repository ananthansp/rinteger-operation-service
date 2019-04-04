var leadManagementDA = require('./leadManagementDA');
var zeroFill = require('zero-fill');
var Leads = require('../model/lead.model');

exports.createLeads = function (req, res) {
    try {
        var currentDate = new Date();
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1;
        var year = currentDate.getFullYear();
        var date = day + "/" + month + "/" + year;


        var oYear = year.toString();
        var orderYear = oYear.slice(-2);
        var order = "LEAD";
        var locale = "en-us";
        var result = currentDate.toLocaleString(locale, {
            month: "long"
        });
        var orderMonth = result.substr(0, 3).toUpperCase();


        Leads.find().select().exec(function (err, details) {
            if (err) {
                res.status(500).send({
                    message: "Some error occurred while retrieving notes."
                });
            } else {
                if (details.length == 0) {
                    var bookingOrder = order + orderYear + orderMonth + "0001";
                    leadManagementDA.createLeads(req, res, date, bookingOrder);
                } else {
                    var arrayLength = details.length - 1;
                    var maxID = details[arrayLength].leadID.substr(10, 4);
                    var incOrder = maxID.slice(-4);
                    var addZero = zeroFill(4, 1);
                    var result = parseInt(incOrder) + parseInt(addZero);
                    var results = zeroFill(4, result);
                    var bookingOrder = order + orderYear + orderMonth + results;
                    leadManagementDA.createLeads(req, res, date, bookingOrder);
                }
            }

        })
    } catch (error) {
        console.log(error);
    }
}



exports.viewLeads = function (req, res) {
    try {
        leadManagementDA.viewLeads(req, res);
    } catch (error) {
        console.log(error)
    }
}
exports.viewLead = function (req, res) {
    try {
        leadManagementDA.viewLead(req, res);
    } catch (error) {
        console.log(error)
    }
}

exports.deleteLeads = function (req, res) {
    try {
        leadManagementDA.deleteLeads(req, res);
    } catch (error) {
        console.log(error)
    }
}
exports.editLeads = function (req, res) {
    try {
        leadManagementDA.editLeads(req, res);
    } catch (error) {
        console.log(error)
    }
}
exports.editRequirements = function (req, res) {
    try {
        leadManagementDA.editRequirements(req, res);
    } catch (error) {
        console.log(error)
    }
}


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

        Lead.aggregate([{
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
                /* console.log(total); */
                if (total.length == 0) {
                    var bookingOrder = order + orderYear + orderMonth + "0001";
                    leadManagementDA.createQuotation(req, res, date, bookingOrder);

                } else {
                    var maxID = total[0].count + 1;
                    var results = zeroFill(4, maxID);
                    var bookingOrder = order + orderYear + orderMonth + results;
                    leadManagementDA.createQuotation(req, res, date, bookingOrder);
                }
            }
        })
    } catch (error) {
        console.log(error);
    }
}

exports.addRequirements = function (req, res) {
    try {
        leadManagementDA.addRequirements(req, res);
    } catch (error) {
        console.log(error)
    }
}

exports.deleteRequirements = function (req, res) {
    try {
        leadManagementDA.deleteRequirements(req, res);
    } catch (error) {
        console.log(error)
    }
}


exports.deleteFollowUp = function (req, res) {
    try {
        leadManagementDA.deleteFollowUp(req, res);
    } catch (error) {
        console.log(error)
    }
}

exports.addFollowUp = function (req, res) {
    try {
        leadManagementDA.addFollowUp(req, res);
    } catch (error) {
        console.log(error)
    }
}
exports.editFollowUp = function (req, res) {
    try {
        leadManagementDA.editFollowUp(req, res);
    } catch (error) {
        console.log(error)
    }
}
exports.findLeadSource = function (req, res) {
    try {
        leadManagementDA.findLeadSource(req, res);
    } catch (error) {
        console.log(error)
    }
}
exports.findLeadStatus = function (req, res) {
    try {
        leadManagementDA.findLeadStatus(req, res);
    } catch (error) {
        console.log(error)
    }
}
exports.findtoDatefromDate = function (req, res) {
    try {
        leadManagementDA.findtoDatefromDate(req, res);
    } catch (error) {
        console.log(error)
    }
}
exports.findFromMonthToMonth = function (req, res) {
    try {
        leadManagementDA.findFromMonthToMonth(req, res);
    } catch (error) {
        console.log(error)
    }
}
exports.findLeadUnit = function (req, res) {
    try {
        leadManagementDA.findLeadUnit(req, res);
    } catch (error) {
        console.log(error)
    }
}
