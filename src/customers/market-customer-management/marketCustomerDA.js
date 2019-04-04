'use strict';

var MarketCustomer = require('../../model/marketcustomer.model');

exports.createMarketCustomer = function (req, res) {
    var marketCustomerData = [];
    for (var i = 0; i <= req.body.length - 1; i++) {
        var fullMarketCustomer = [];
        fullMarketCustomer[i] = new MarketCustomer();
        fullMarketCustomer[i].name = req.body[i].name;
        fullMarketCustomer[i].mobileNumber = req.body[i].mobileNumber;
        fullMarketCustomer[i].whatsAppNo = req.body[i].whatsAppNo;
        fullMarketCustomer[i].landLine = req.body[i].landLine;
        fullMarketCustomer[i].emailId = req.body[i].emailId;
        fullMarketCustomer[i].location = req.body[i].location;
        marketCustomerData.push(fullMarketCustomer[i]);
    }
    MarketCustomer.insertMany(marketCustomerData, function (err, sendData) {
        if (err) {
            console.log(err);
            res.send('Error Data');
        }
        res.status(200).json(sendData);
        console.log('send:', sendData);
    });
}

exports.singleMarketCustomer = function (req, res) {
    var singMarketCustomer = new MarketCustomer();
    singMarketCustomer.name= req.body.name;
    singMarketCustomer.mobileNumber = req.body.mobileNumber;
    singMarketCustomer.whatsAppNo = req.body.whatsAppNo;
    singMarketCustomer.landLine = req.body.landLine;
    singMarketCustomer.emailId = req.body.emailId;
    singMarketCustomer.location = req.body.location;
    singMarketCustomer.save(function (err, contentData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(contentData);
        }
    });
}

exports.allMarketCustomers = function (req, res) {
    MarketCustomer.find({}).select().exec(function (err, customerAcc) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(customerAcc);
        }
    });
}
exports.marketCustomerDetailsEdit = function (req, res) {
    MarketCustomer.findById(req.params.id, function (err, editMarketCustomer) {
        if (err) {
            console.log('Error:', err);
        } else {
            editMarketCustomer.name = req.body.name;
            editMarketCustomer.mobileNumber = req.body.mobileNumber;
            editMarketCustomer.whatsAppNo = req.body.whatsAppNo;
            editMarketCustomer.landLine = req.body.landLine;
            editMarketCustomer.emailId = req.body.emailId;
            editMarketCustomer.location = req.body.location;
            editMarketCustomer.save(function (err, contentData) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {
                    res.status(200).json(contentData);
                }
            });
        }
    });
}
exports.marketCustomerDetailsDelete = function (req, res) {
    MarketCustomer.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            MarketCustomer.find({}).select().exec(function (err, deleteAcc) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {
                    res.status(200).json(deleteAcc);
                }
            });
        }
    });
}

/* exports.marketCustomerDuplicateData = function (req, res) {
    var duplicatePhoneNos = [];
    MarketCustomer.aggregate([{
            $group: {
                _id: {
                    mobileNumber: "$mobileNumber"
                },
                count: {
                    "$sum": 1
                }
            }
        },
        {
            $match: {
                count: {
                    "$gt": 1
                }
            }
        }
    ]).exec(function (err, data) {
        console.log(res); // [ { maxBalance: 98 } ]
        for (var i = 0; i < data.length; i++) {
            duplicatePhoneNos.push(data[i]._id.mobileNumber);
        }
        // Please write the query to get all the records with this duplicateNos

        MarketCustomer.find({
            'mobileNumber': {
                '$in': duplicatePhoneNos
            }
        }, function (err, duplicateData) {
            if (err) {
                res.status(500).send({
                    message: "Some error occurred while retrieving notes."
                });
            } else {
                res.status(200).json(duplicateData)
            }
        });
    });
};
 */