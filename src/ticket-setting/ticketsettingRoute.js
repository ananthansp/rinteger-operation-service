var ticketsettingMgr = require('./ticketsettingMgr');

module.exports = function (app) {
  // ticket settings
  app.route('/department')
    .post(ticketsettingMgr.addDepartment);

  app.route('/departments')
    .get(ticketsettingMgr.viewDepartment);

  app.route('/departments/:source')
    .delete(ticketsettingMgr.deleteDepartment);



  app.route('/assignedto')
    .post(ticketsettingMgr.addAssignedto);

  app.route('/multiassignedto')
    .get(ticketsettingMgr.viewAssignedto);

  app.route('/multiassignedto/:source')
    .delete(ticketsettingMgr.deleteAssignedto);


  app.route('/assignedby')
    .post(ticketsettingMgr.addAssignedby);

  app.route('/multiassignedby')
    .get(ticketsettingMgr.viewAssignedby);

  app.route('/multiassignedby/:source')
    .delete(ticketsettingMgr.deleteAssignedby);


  /* app.route('/leadstatus')
    .post(settingsMgr.addLeadStatus);

  app.route('/leadstatus/:status')
    .delete(settingsMgr.deleteLeadStatus);

  app.route('/services')
    .post(settingsMgr.addServices);

  app.route('/leadservices/:service')
    .delete(settingsMgr.deleteLeadService);

    app.route('/type')
    .post(settingsMgr.addLeadType);

  app.route('/leadtype/:type')
    .delete(settingsMgr.deleteLeadType);


  // workorder pdf settings
  app.route('/workordergst')
    .post(settingsMgr.addGST);
  app.route('/workordersgst')
    .post(settingsMgr.addSGST);
  app.route('/workordercgst')
    .post(settingsMgr.addCGST);
  app.route('/workorderterms')
    .post(settingsMgr.addTerms);
    app.route('/workorderdigitalterms')
    .post(settingsMgr.addDigitalTerms);
  app.route('/bankdetails')
    .post(settingsMgr.addBankDetails);
  app.route('/companydetails')
    .post(settingsMgr.addCompanyDetails);
  app.route('/footerdetails')
    .post(settingsMgr.addFooterDetails);
  app.route('/pdfworkorder')
    .get(settingsMgr.viewPdfWorkOrder);
*/

}

