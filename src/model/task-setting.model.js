var mongoose = require('mongoose');

const tasksettingSchema = new mongoose.Schema({
   
   department:[String],
   assignedBy:[String]

});
const tasksetting = mongoose.model('tasksetting',tasksettingSchema);
module.exports =  tasksetting;