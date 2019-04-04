var registerDA = require('./registerDA');

exports.createRegister = function (req, res) {
    try {
        registerDA.createRegister(req, res);
    } catch (error) {
        console.log(error);
    }

}

exports.findRegister = function (req, res) {
    try {
        registerDA.findRegister(req, res);
    } catch (error) {
        console.log(error);
    }

}
