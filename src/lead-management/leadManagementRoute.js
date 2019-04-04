var leadManagementMgr = require('./leadManagementMgr');

module.exports = function (app) {

    app.route('/addlead')
        .post(leadManagementMgr.createLeads);

       app.route('/viewleads')
        .get(leadManagementMgr.viewLeads);

        app.route('/lead/:id')
        .get(leadManagementMgr.viewLead);

         app.route('/leads/:id')
        .delete(leadManagementMgr.deleteLeads);

        app.route('/leads/:id')
        .put(leadManagementMgr.editLeads);

        app.route('/leads/:id/requirements/:reqid')
        .put(leadManagementMgr.editRequirements);

        app.route('/addQuotation/:id')
        .put(leadManagementMgr.createQuotation);

        app.route('/lead/:leadid/requirements/:id')
        .delete(leadManagementMgr.deleteRequirements);

        app.route('/requirements/:id')
        .put(leadManagementMgr.addRequirements);

        app.route('/followup/:id')
        .put(leadManagementMgr.addFollowUp);

        app.route('/leads/:id/followup/:followid')
        .put(leadManagementMgr.editFollowUp);

        app.route('/lead/:leadid/followUp/:id')
        .delete(leadManagementMgr.deleteFollowUp);

        app.route('/leadsource/:source')
        .get(leadManagementMgr.findLeadSource);
        app.route('/leadstatus/:status')
        .get(leadManagementMgr.findLeadStatus);
        app.route('/leaddate')
        .post(leadManagementMgr.findtoDatefromDate);
        app.route('/leadmonth')
        .post(leadManagementMgr.findFromMonthToMonth);
        app.route('/leaddepartment')
        .post(leadManagementMgr.findLeadUnit);
}
