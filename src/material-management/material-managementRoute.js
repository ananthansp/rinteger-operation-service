var materialMgr = require('./material-managementMgr');

module.exports = function(app){
    app.route('/creatematerial').post(materialMgr.CreateMaterial);
    app.route('/findAllMaterial').get(materialMgr.getAllMaterial);
    app.route('/findSingleMaterial/:id').get(materialMgr.getSingleMaterial);
    app.route('/findallworkorder').get(materialMgr.findAllWorkorder);
    app.route('/updateMaterial/:id').put(materialMgr.editMaterialSheet);
    app.route('/updateMaterial/:id/product/:id').put(materialMgr.editProduct);
    app.route('/deletematerial/:id').delete(materialMgr.deleteMaterial);
    app.route('/deleteworkorder/:id').delete(materialMgr.deleteWorkorder);
    app.route('/findbydate').post(materialMgr.findByDate);
    app.route('/findbydatematerial').post(materialMgr.findByDateMaterial);
    app.route('/findbydatesinglematerial').post(materialMgr.findByDateSingleMaterial);
    app.route('/shootingstatus').post(materialMgr.filterByShootStatus);
    app.route('/paymentstatus').post(materialMgr.filterByPaymentStatus);
    app.route('/shoottype').post(materialMgr.filterByShootType);
    app.route('/dipatchtype').post(materialMgr.filterByDispatchType);
    app.route('/materialstatus').post(materialMgr.filterByMaterialStatus);
    app.route('/findpaymentstatus/:workOrderID').get(materialMgr.findPaymentStatus);
}