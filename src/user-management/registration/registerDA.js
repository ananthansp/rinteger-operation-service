var RegAccount = require('./../../model/register.model');
var AdminAccount = require('./../../model/admin-account.model');

exports.createRegister = function (req, res) {
    var regAccount = new RegAccount();
    regAccount.userName = req.body.userName;
    regAccount.password = req.body.password;
    regAccount.mobileNumber = req.body.mobileNumber;
    regAccount.email = req.body.email;
    regAccount.role = req.body.role;
    regAccount.unit = req.body.unit;
    regAccount.save(function (err, regData) {
        if (err) {
            res.status(500).json(err);
            console.log(err);
        } else {
            var adminAccount = new AdminAccount();
            adminAccount.userName = req.body.userName;
            adminAccount.password = req.body.password;
            adminAccount.role = req.body.role;
            adminAccount.unit = req.body.unit;
            adminAccount.save(function (err, masterData) {
                if (err) {
                    res.status(500).json(err);
                    console.log(err);
                } else {
                    res.status(200).json(masterData);
                }
            });

        }
    });
};
exports.findRegister = function (req, res) {
    RegAccount.find({}, function (err, regData) {
        if (err) {
            res.send(err);
            console.log(err);
        } else {
            res.status(200).json(regData);
        }
    });
};