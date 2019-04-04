'use strict';

var marketCustomerMgr = require('./marketCustomerMgr');

module.exports = function (app) {
    app.route('/marketcustomers')
        .post(marketCustomerMgr.createMarketCustomer);
    app.route('/allmarketcustomers')
        .get(marketCustomerMgr.allMarketCustomers);
    app.route('/marketcustomers/:id')
        .put(marketCustomerMgr.marketCustomerDetailsEdit);
    app.route('/marketcustomersdelete/:id')
        .delete(marketCustomerMgr.marketCustomerDetailsDelete);
    app.route('/singlemarketcustomers')
        .post(marketCustomerMgr.singleMarketCustomer);
}