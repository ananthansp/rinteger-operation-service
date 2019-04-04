var mongoose = require('mongoose');
var ExpenseSettingSchema = new mongoose.Schema({
    modeOfPayment: [String],
    expenseType: [String],
    gst: [String]
});
const ExpenseSetting = mongoose.model("expensesetting",ExpenseSettingSchema);
module.exports = ExpenseSetting;