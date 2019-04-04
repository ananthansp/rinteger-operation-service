var taskMgr = require('./taskMgr');

module.exports = function(app){
    app.route('/createtask').post(taskMgr.CreateTask);
    app.route('/findalltask').get(taskMgr.findAllTask);
    app.route('/findsingle/:id').get(taskMgr.findSingleTask);
    app.route('/updatetask/:id').put(taskMgr.editTask);
    app.route('/unitwisetask/:name').get(taskMgr.unitwisetask);
    app.route('/deadlinedTask').get(taskMgr.deadlinedTask);
    app.route('/unitName').get(taskMgr.unitWiseName);
    app.route('/deletetask/:id').delete(taskMgr.deleteTask);
    app.route('/findadmin').get(taskMgr.findAdmin);
    app.route('/finduserid/:userId').get(taskMgr.findByUserID);
}