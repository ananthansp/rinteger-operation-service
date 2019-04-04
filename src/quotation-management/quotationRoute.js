var quotationMgr = require('./quotationMgr');

module.exports = function (app) {

        app.route('/quotation')
        .post(quotationMgr.createQuotation);
        app.route('/deletequotation/:quoid')
        .delete(quotationMgr.deleteQuotation);
        app.route('/viewsinglequotation/:quoid')
        .get(quotationMgr.viewSingleQuotation);
        app.route('/viewquotation/:leadid')
        .get(quotationMgr.viewQuotation);
        app.route('/viewallquotation')
        .get(quotationMgr.viewAllQuotation);
        app.route('/quotation/:id')
        .put(quotationMgr.updateQuotation);

       /*  app.route('/viewsingleworkorder/:leadid/single/:workid')
        .get(quotationMgr.viewSingleWorkOrder);
        app.route('/workorder/:leadid/onedelete/:id')
        .delete(quotationMgr.deleteWorkOrder);
        app.route('/workorder/:leadid/oneupdate/:id')
        .put(quotationMgr.updateWorkOrder); */
        /* app.route('/workorderreq/:leadid/onework/:id/req/:reqid')
        .delete(workorderMgr.deleteWorkOrderReq); */
        app.route('/quotationdate')
        .post(quotationMgr.findtoDatefromDate);
        app.route('/quotationmonth')
        .post(quotationMgr.findFromMonthToMonth);
}
