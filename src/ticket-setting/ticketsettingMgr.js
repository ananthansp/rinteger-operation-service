var ticketsettingDA = require('./ticketsettingDA');


exports.addDepartment = function(req, res) {
    try{
        ticketsettingDA.addDepartment(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.viewDepartment = function(req, res) {
    try{
        ticketsettingDA.viewDepartment(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.deleteDepartment = function(req, res) {
    try{
        ticketsettingDA.deleteDepartment(req, res); 
    } catch  (error){
        console.log(error)
    }
}





exports.addAssignedto = function(req, res) {
    try{
        ticketsettingDA.addAssignedto(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.viewAssignedto = function(req, res) {
    try{
        ticketsettingDA.viewAssignedto(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.deleteAssignedto = function(req, res) {
    try{
        ticketsettingDA.deleteAssignedto(req, res); 
    } catch  (error){
        console.log(error)
    }
}


exports.addAssignedby = function(req, res) {
    try{
        ticketsettingDA.addAssignedby(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.viewAssignedby = function(req, res) {
    try{
        ticketsettingDA.viewAssignedby(req, res); 
    } catch  (error){
        console.log(error)
    }
}
exports.deleteAssignedby = function(req, res) {
    try{
        ticketsettingDA.deleteAssignedby(req, res); 
    } catch  (error){
        console.log(error)
    }
}




/*
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
*/


