var mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

    taskNo: String,
    dateTime: Date,
    userId: String,
    taskTitle: String,
    taskDescription: String,
    priority: String,
    units: String,
    department: String,
    assignedTo: String,
    assignedBy: String,
    status: String,
    toCloseDate: Date,
    closedDate: Date

});
const taskdetails = mongoose.model('taskDetail',taskSchema);
module.exports =  taskdetails;