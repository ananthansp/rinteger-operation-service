var settingsDA = require('./settingsDA');

exports.addLeadSource = function(req, res) {
    try{
        settingsDA.addLeadSource(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.viewLeadSource = function(req, res) {
    try{
        settingsDA.viewLeadSource(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.deleteLeadSource = function(req, res) {
    try{
        settingsDA.deleteLeadSource(req, res); 
    } catch  (error){
        console.log(error)
    }
}

exports.addLeadStatus = function(req, res) {
    try{
        settingsDA.addLeadStatus(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.addServices = function(req, res) {
    try{
        settingsDA.addServices(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.deleteLeadService = function(req, res) {
    try{
        settingsDA.deleteLeadService(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.deleteLeadStatus = function(req, res) {
    try{
        settingsDA.deleteLeadStatus(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.addLeadType = function(req, res) {
    try{
        settingsDA.addLeadType(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.deleteLeadType = function(req, res) {
    try{
        settingsDA.deleteLeadType(req, res); 
    } catch  (error){
        console.log(error)
    }
}


exports.addGST = function(req, res) {
    try{
        settingsDA.addGST(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.addSGST = function(req, res) {
    try{
        settingsDA.addSGST(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.addCGST = function(req, res) {
    try{
        settingsDA.addCGST(req, res); 
    } catch  (error){
        console.log(error)
    }
}


exports.addTerms = function(req, res) {
    try{
        settingsDA.addTerms(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.addDigitalTerms = function(req, res) {
    try{
        settingsDA.addDigitalTerms(req, res); 
    } catch  (error){
        console.log(error)
    }
}

exports.addBankDetails = function(req, res) {
    try{
        settingsDA.addBankDetails(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.addCompanyDetails = function(req, res) {
    try{
        settingsDA.addCompanyDetails(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.addFooterDetails = function(req, res) {
    try{
        settingsDA.addFooterDetails(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.viewPdfWorkOrder = function(req, res) {
    try{
        settingsDA.viewPdfWorkOrder(req, res); 
    } catch  (error){
        console.log(error)
    }
}

exports.addLeadUnit = function(req, res) {
    try{
        settingsDA.addLeadUnit(req, res); 
    } catch  (error){
        console.log(error)
    }
}

exports.deleteLeadUnit = function(req, res) {
    try{
        settingsDA.deleteLeadUnit(req, res); 
    } catch  (error){
        console.log(error)
    }
}


exports.findExpense = function(req, res){
    try{
        settingsDA.findExpense(req, res);
    }
    catch(error){
        console.log(error);
    }
}
exports.addExpensePayment = function(req, res){
    try{
        settingsDA.addExpensePayment(req, res);
    }
    catch(error){
        console.log(error);
    }
}
exports.deleteExpensePayment = function(req, res){
    try{
        settingsDA.deleteExpensePayment(req, res);
    }
    catch(error){
        console.log(error);
    }
}
exports.addExpenseType = function(req, res){
    try{
        settingsDA.addExpenseType(req, res);
    }
    catch(error){
        console.log(error);
    }
}
exports.deleteExpenseType = function(req, res){
    try{
        settingsDA.deleteExpenseType(req, res);
    }
    catch(error){
        console.log(error);
    }
}
exports.addExpenseGst = function(req, res){
    try{
        settingsDA.addExpenseGst(req, res);
    }
    catch(error){
        console.log(error);
    }
}
exports.deleteExpenseGst = function(req, res){
    try{
        settingsDA.deleteExpenseGst(req, res);
    }
    catch(error){
        console.log(error);
    }
}

exports.addIncomePaymentModel = function(req, res) {
    try{
        settingsDA.addIncomePaymentModel(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.getIncomeSettings = function(req, res) {
    try{
        settingsDA.getIncomeSettings(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.deleteIncomePaymentModel = function(req, res) {
    try{
        settingsDA.deleteIncomePaymentModel(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.addIncomeGst = function(req, res) {
    try{
        settingsDA.addIncomeGst(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.deleteIncomeGst = function(req, res) {
    try{
        settingsDA.deleteIncomeGst(req, res); 
    } catch  (error){
        console.log(error)
    }
}

exports.getMaterialSettings = function(req, res) {
    try{
        settingsDA.getMaterialSettings(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.addShootType = function(req, res) {
    try{
        settingsDA.addShootType(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.deleteShootType = function(req, res) {
    try{
        settingsDA.deleteShootType(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.addDispatchType = function(req, res) {
    try{
        settingsDA.addDispatchType(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.deleteDispatchType = function(req, res) {
    try{
        settingsDA.deleteDispatchType(req, res); 
    } catch  (error){
        console.log(error)
    }
}

exports.addMaterialStatus = function(req, res) {
    try{
        settingsDA.addMaterialStatus(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.deleteMaterialStatus = function(req, res) {
    try{
        settingsDA.deleteMaterialStatus(req, res); 
    } catch  (error){
        console.log(error)
    }
}


exports.addTaskDepartment = function(req, res) {
    try{
        settingsDA.addTaskDepartment(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.viewTaskDepartment = function(req, res) {
    try{
        settingsDA.viewTaskDepartment(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.deleteTaskDepartment = function(req, res) {
    try{
        settingsDA.deleteTaskDepartment(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.addAssignedby = function(req, res) {
    try{
        settingsDA.addAssignedby(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.viewAssignedby = function(req, res) {
    try{
        settingsDA.viewAssignedby(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.deleteAssignedby = function(req, res) {
    try{
        settingsDA.deleteAssignedby(req, res); 
    } catch  (error){
        console.log(error)
    }
}