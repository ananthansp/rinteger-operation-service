var workorderMgr = require('./workorderMgr');

module.exports = function (app) {

        app.route('/workorder')
                .post(workorderMgr.createWorkOrder);
        app.route('/viewworkorder/:leadid')
                .get(workorderMgr.viewWorkOrder);
        app.route('/viewsingleworkorder/:workid')
                .get(workorderMgr.viewSingleWorkOrder);
        app.route('/workorder/:workid')
                .delete(workorderMgr.deleteWorkOrder);
        app.route('/workorder/:id')
                .put(workorderMgr.updateWorkOrder);

        app.route('/workorderpdfdetails')
                .get(workorderMgr.companyDetails);
        app.route('/viewallworkorder')
                .get(workorderMgr.viewAllWorkorder);
        app.route('/allworkordertotal')
                .get(workorderMgr.totalWorkOrder);
        app.route('/workorderdate')
                .post(workorderMgr.findtoDatefromDate);
        app.route('/workordermonth')
                .post(workorderMgr.findFromMonthToMonth);
        app.route('/workorwithoutgst')
                .post(workorderMgr.withOutGstWorkOrder);
        app.route('/workorwithgst')
                .post(workorderMgr.withGstWorkOrder);
        app.route('/workorderunit')
                .post(workorderMgr.findWorkOrderUnit);

        /* app.route('/workorderreq/:leadid/onework/:id/req/:reqid')
        .delete(workorderMgr.deleteWorkOrderReq); */
}
