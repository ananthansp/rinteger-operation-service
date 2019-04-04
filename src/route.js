var leadManagementRoutes = require('./lead-management/leadManagementRoute');
var customerManagementRoutes = require('./customers/customer-management/customerManagementRoute');
var workorderRoutes = require('./workorder-management/workorderRoute');
var settingsRoutes = require('./settings/settingsRoute');
var quotationRoutes = require('./quotation-management/quotationRoute');
var invoiceRoutes = require('./invoice-management/invoiceRoute');
var proformainvoiceRoutes = require('./proformainvoice-management/proformainvoiceRoute');
var accountRoutes = require('./account/accountRoute');
var expenseRoutes = require('./expense-management/expense-managementRoute');
var marketCustomerRoutes = require('./customers/market-customer-management/marketCustomerRoute');
var subscribeCustomerRoutes = require('./customers/subscribe-customer-management/subscribeCustomerRoute');
var ticketRoutes = require ('./ticket-management/ticketRoute');
var ticketsettingRoutes = require ('./ticket-setting/ticketsettingRoute');
var incomeRoutes = require('./income-management/income-managementRoute');
var materialRoutes = require('./material-management/material-managementRoute');
var userManagementRoutes = require('./user-management/userManagementRoute');
exports.loadRoutes = function (app) {
    leadManagementRoutes(app);
    customerManagementRoutes(app);
    workorderRoutes(app);
    settingsRoutes(app);
    quotationRoutes(app);
    invoiceRoutes(app);
    proformainvoiceRoutes(app);
    accountRoutes(app);
    expenseRoutes(app);
    marketCustomerRoutes(app);
    subscribeCustomerRoutes(app);
    ticketRoutes(app);
    ticketsettingRoutes(app);
    incomeRoutes(app);
    materialRoutes(app);
    userManagementRoutes(app);
};
