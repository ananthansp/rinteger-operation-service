var settingsMgr = require('./settingsMgr');

module.exports = function (app) {
  // lead settings
  app.route('/leadsource')
    .post(settingsMgr.addLeadSource);

  app.route('/leadsources')
    .get(settingsMgr.viewLeadSource)

  app.route('/leadsources/:source')
    .delete(settingsMgr.deleteLeadSource)

  app.route('/leadstatus')
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
  app.route('/leadunitadd')
    .post(settingsMgr.addLeadUnit);
  app.route('/leadunit/:unit')
    .delete(settingsMgr.deleteLeadUnit);
  app.route('/expense')
    .get(settingsMgr.findExpense);
  app.route('/addexpensepayment')
    .post(settingsMgr.addExpensePayment);
  app.route('/deleteexpensepayment/:modeOfPayment')
    .delete(settingsMgr.deleteExpensePayment);
  app.route('/addexpensetype')
    .post(settingsMgr.addExpenseType);
  app.route('/deleteexpensetype/:expenseType')
    .delete(settingsMgr.deleteExpenseType);
  app.route('/addexpensegst')
    .post(settingsMgr.addExpenseGst);
  app.route('/deleteexpensegst/:gst')
    .delete(settingsMgr.deleteExpenseGst);
  app.route('/addincomepaymentmode')
    .post(settingsMgr.addIncomePaymentModel);
  app.route('/viewincomepaymentmode')
    .get(settingsMgr.getIncomeSettings);
  app.route('/deleteincomepaymentmode/:modeOfPayment')
    .delete(settingsMgr.deleteIncomePaymentModel);
  app.route('/addincomegst')
    .post(settingsMgr.addIncomeGst);
  app.route('/deleteincomegst/:gst')
    .delete(settingsMgr.deleteIncomeGst);
  app.route('/getmaterial')
    .get(settingsMgr.getMaterialSettings);
  app.route('/addshoottype')
    .post(settingsMgr.addShootType);
  app.route('/deleteshoottype/:shootType')
    .delete(settingsMgr.deleteShootType);
  app.route('/adddispatchtype')
    .post(settingsMgr.addDispatchType);
  app.route('/deletedispatchtype/:dispatchType')
    .delete(settingsMgr.deleteDispatchType);
  app.route('/addmaterialstauts')
    .post(settingsMgr.addMaterialStatus);
  app.route('/deletematerialstatus/:materialStatus')
    .delete(settingsMgr.deleteMaterialStatus);

  app.route('/adddepartment')
    .post(settingsMgr.addTaskDepartment);
  app.route('/viewdepartments')
    .get(settingsMgr.viewTaskDepartment);
  app.route('/deletedepartments/:department')
    .delete(settingsMgr.deleteTaskDepartment);
  app.route('/taskassignedby')
    .post(settingsMgr.addAssignedby);
  app.route('/viewtaskassignedy')
    .get(settingsMgr.viewAssignedby);
  app.route('/deletetaskassiginedby/:assignedBy')
    .delete(settingsMgr.deleteAssignedby);
}
