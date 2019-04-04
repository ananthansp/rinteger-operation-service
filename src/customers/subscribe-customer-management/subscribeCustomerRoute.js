'use strict';
var subscribedbMgr = require('./subscribeCustomerMgr');

module.exports = function (app) {
    app.route('/subscribedcustomers')
    .get(subscribedbMgr.onlySubscribed);
    app.route('/subscribednumber/:id')
    .delete(subscribedbMgr.deleteSubscribedNumber);
    app.route('/pushnotificationsubscribe')
    .post(subscribedbMgr.addPushSubscriber);
}