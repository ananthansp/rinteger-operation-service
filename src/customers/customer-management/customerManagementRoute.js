var customerManagementMgr = require('./customerManagementMgr');

module.exports = function (app) {

  app.route('/addcustomer')
    .post(customerManagementMgr.createCustomer);

  app.route('/viewcustomer')
    .get(customerManagementMgr.viewCustomers);

  app.route('/checkcustomers/:number')
    .get(customerManagementMgr.checkCustomers);

  app.route('/customer/:id')
    .delete(customerManagementMgr.deleteCustomers);

  app.route('/customer/:id')
    .put(customerManagementMgr.editCustomer);
  app.route('/singlecustomer/:id')
    .get(customerManagementMgr.viewSingleCustomer);


  // view customer by customerID

  app.route('/customerdetails/:id')
    .get(customerManagementMgr.customerDetails);
    app.route('/multiplecustomertest')
    .post(customerManagementMgr.multipleCustomer);


}
