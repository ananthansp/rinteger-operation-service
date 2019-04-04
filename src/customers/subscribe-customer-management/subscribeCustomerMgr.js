'use strict';
var  subscribeCustomerDA = require('./subscribeCustomerDA');

exports.onlySubscribed = function (req, res) {
    try {
        subscribeCustomerDA.onlySubscribed(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.deleteSubscribedNumber = function (req, res) {
    try {
        subscribeCustomerDA.deleteSubscribedNumber(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.addPushSubscriber = function (req, res) {

try {
    var date = new Date();
    subscribeCustomerDA.notificationSubscription(req, res, date);
} catch (error) {
    console.log(error);
}

}
