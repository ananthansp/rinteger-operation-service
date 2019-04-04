var proformainvoiceMgr = require('./proformainvoiceMgr');

module.exports = function (app) {

  app.route('/proforma')
    .post(proformainvoiceMgr.createProformaInvoice);
  app.route('/proforma/:pinvid')
    .delete(proformainvoiceMgr.deleteProformaInvoice);
  app.route('/viewsingleproforma/:pinvid')
    .get(proformainvoiceMgr.viewSingleProformaInvoice);
  app.route('/viewproforma/:workid')
    .get(proformainvoiceMgr.viewProforma);
  app.route('/viewallprofomainvoice')
    .get(proformainvoiceMgr.viewAllProforma);
  app.route('/profomainvoice/:id')
    .put(proformainvoiceMgr.updateProfomaInvoice);

  app.route('/profomadate')
    .post(proformainvoiceMgr.findtoDatefromDate);
  app.route('/profomamonth')
    .post(proformainvoiceMgr.findFromMonthToMonth)
}
/* var  proformainvoiceMgr = require('./invoiceMgr'); */

/* module.exports = function (app) {

        app.route('/proforma')
        .post(proformainvoiceMgr.createProformaInvoice);
        app.route('/proforma/:pinvid')
        .delete(proformainvoiceMgr.deleteProformaInvoice);
        app.route('/viewsingleinvoice/:pinvid')
        .get(proformainvoiceMgr.viewSingleProformaInvoice);
        app.route('/viewinvoice/:workid')
        .get(proformainvoiceMgr.viewProforma);
        app.route('/viewallinvoice') 
        .get(proformainvoiceMgr.viewAllProforma);
}
 */