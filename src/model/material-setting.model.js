var mongoose = require('mongoose');

var materialManagementSchema = new mongoose.Schema({
    shootType: [String],
    dispatchType: [String],
    materialStatus: [String]
});

const MaterialDetail = mongoose.model('materialsettingDetail',materialManagementSchema);
module.exports = MaterialDetail;
