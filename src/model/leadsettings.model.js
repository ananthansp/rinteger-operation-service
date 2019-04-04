var mongoose = require('mongoose');
var LeadSettingSchema = new mongoose.Schema({
    leadSource: [String],
    leadStatus: [String],
    service: [String],
    type: [String],
    leadUnit: [String]
}); 

const LeadSetting = mongoose.model('leadsetting', LeadSettingSchema);
module.exports = LeadSetting;