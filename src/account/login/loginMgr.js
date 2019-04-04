'use strict';
var loginDA = require('./loginDA');

exports.loginVerify = function (req, res) {
    try {
        loginDA.loginVerify(req, res);
    } catch (error) {
        console.log(error);
    }

}
exports.createLoginDetail = function (req, res) {
    try {
        loginDA.createLoginDetail(req, res);
    } catch (error) {
        console.log(error);
    }

}