var expenseMgr = require('./expense-managementMgr');

module.exports = function(app){
    app.route('/createexpense').post(expenseMgr.createExpense);
    app.route('/findallexpense').get(expenseMgr.viewAllExpense);
    app.route('/deleteexpense/:id').delete(expenseMgr.deleteExpense);
    app.route('/editexpense/:id').put(expenseMgr.editExpense);
    app.route('/singleexpense/:id').get(expenseMgr.viewSingleExpense);
    app.route('/typefilter').post(expenseMgr.filterByType);
    app.route('/datefilter').post(expenseMgr.dateFilter);
    app.route('/tdsfind').get(expenseMgr.tdsfilter);
    app.route('/gstfind').get(expenseMgr.gstFilter);

}