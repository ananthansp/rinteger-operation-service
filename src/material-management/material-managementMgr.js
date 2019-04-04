var materialDA = require("./material-managementDA");

exports.CreateMaterial = function(req, res){
    try{
        materialDA.CreateMaterial(req, res);
    }
    catch(error){
        console.log(error);
    }
}
exports.getAllMaterial = function(req, res){
    try{
        materialDA.getAllMaterial(req, res);
    }
    catch(error){
        console.log(error);
    }
}
exports.getSingleMaterial = function(req, res){
    try{
        materialDA.getSingleMaterial(req, res);
    }
    catch(error){
        console.log(error);
    }
}
exports.findAllWorkorder = function(req, res){
    try{
        materialDA.findAllWorkorder(req, res);
    }
    catch(error){
        console.log(error);
    }
}
exports.editMaterialSheet = function(req, res){
    try{
        materialDA.editMaterialSheet(req, res);
    }
    catch(error){
        console.log(error);
    }
}
exports.editProduct = function(req, res){
    try{
        materialDA.editProduct(req, res);
    }
    catch(error){
        console.log(error);
    }
}
exports.deleteMaterial = function(req, res){
    try{
        materialDA.deleteMaterial(req, res);
    }
    catch(error){
        console.log(error);
    }
}
exports.deleteWorkorder = function(req, res){
    try{
        materialDA.deleteWorkorder(req, res);
    }
    catch(error){
        console.log(error);
    }
}
exports.findByDate = function(req, res){
    try{
        materialDA.findByDate(req, res);
    }
    catch(error){
        console.log(error);
    }
}
exports.findByDateMaterial = function(req, res){
    try{
        materialDA.findByDateMaterial(req, res);
    }
    catch(error){
        console.log(error);
    }
}
exports.findByDateSingleMaterial = function(req, res){
    try{
        materialDA.findByDateSingleMaterial(req, res);
    }
    catch(error){
        console.log(error);
    }
}
exports.filterByShootStatus = function(req, res){
    try{
        materialDA.filterByShootStatus(req, res);
    }
    catch(error){
        console.log(error);
    }
}
exports.filterByPaymentStatus = function(req, res){
    try{
        materialDA.filterByPaymentStatus(req, res);
    }
    catch(error){
        console.log(error);
    }
}
exports.filterByShootType = function(req, res){
    try{
        materialDA.filterByShootType(req, res);
    }
    catch(error){
        console.log(error);
    }
}
exports.filterByDispatchType = function(req, res){
    try{
        materialDA.filterByDispatchType(req, res);
    }
    catch(error){
        console.log(error);
    }
}
exports.filterByMaterialStatus = function(req, res){
    try{
        materialDA.filterByMaterialStatus(req, res);
    }
    catch(error){
        console.log(error);
    }
}
exports.findPaymentStatus = function(req, res){
    try{
        materialDA.findPaymentStatus(req, res);
    }
    catch(error){
        console.log(error);
    }
}