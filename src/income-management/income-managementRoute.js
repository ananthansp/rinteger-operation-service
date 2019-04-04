var incomeMgr = require('./income-managementMgr');

module.exports = function(app){
    app.route('/findbydate').post(incomeMgr.findByDate);
    app.route('/editincome/:id').put(incomeMgr.editIncome);
    app.route('/findall').get(incomeMgr.findallIncome);
    app.route('/findallwork').get(incomeMgr.findallIncomeWorkOder);
    app.route('/delete/:id').delete(incomeMgr.deleteCustomers);
    app.route('/deleteincome/:id').delete(incomeMgr.deleteIncome);
    app.route('/editincomesheet/:id').put(incomeMgr.editIncomeSheet);
    app.route('/findtds').get(incomeMgr.findTDS);
}