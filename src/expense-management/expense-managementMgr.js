var expenseDA = require('./expense-managementDA');

exports.createExpense = function (req, res) {
    try {
        expenseDA.createExpense(req, res);
    } catch (error) {
      console.log(error);
    }
  }
  exports.viewAllExpense = function (req, res) {
    try {
        expenseDA.viewAllExpense(req, res);
    } catch (error) {
      console.log(error);
    }
  }

  exports.deleteExpense = function (req, res) {
    try {
        expenseDA.deleteExpense(req, res);
    } catch (error) {
      console.log(error);
    }
  }

  exports.editExpense = function (req, res) {
    try {
        expenseDA.editExpense(req, res);
    } catch (error) {
      console.log(error);
    }
  }
  exports.viewSingleExpense = function (req, res) {
    try {
        expenseDA.viewSingleExpense(req, res);
    } catch (error) {
      console.log(error);
    }
  }
  exports.filterByType = function (req, res) {
    try {
        expenseDA.filterByType(req, res);
    } catch (error) {
      console.log(error);
    }
  }
  exports.dateFilter = function (req, res) {
    try {
        expenseDA.dateFilter(req, res);
    } catch (error) {
      console.log(error);
    }
  }
  exports.tdsfilter = function (req, res) {
    try {
        expenseDA.tdsfilter(req, res);
    } catch (error) {
      console.log(error);
    }
  }
  exports.gstFilter = function(req, res){
    try{
      expenseDA.gstFilter(req, res)
    }
    catch(error){
      console.log(error);
    }
  }