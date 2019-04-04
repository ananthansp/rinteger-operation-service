var invoiceMgr = require('./invoiceMgr');

module.exports = function (app) {

        app.route('/invoice')
                .post(invoiceMgr.createInvoice);
        app.route('/deleteinvoice/:invid')
                .delete(invoiceMgr.deleteInvoice);
        app.route('/viewsingleinvoice/:invid')
                .get(invoiceMgr.viewSingleInvoice);
        app.route('/viewinvoice/:workid')
                .get(invoiceMgr.viewInvoice);
        app.route('/viewallinvoice')
                .get(invoiceMgr.viewAllInvoice);
        app.route('/invoice/:id')
                .put(invoiceMgr.updateInvoice);
        app.route('/invoicedate')
        .post(invoiceMgr.findtoDatefromDate);
        app.route('/invoicemonth')
        .post(invoiceMgr.findFromMonthToMonth);
}
