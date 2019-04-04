
var ticketMgr = require('./ticketMgr');

module.exports = function(app){
    app.route('/createticket').post(ticketMgr.ticket);
    app.route('/retriveticket').get(ticketMgr.retriveticket);
    app.route('/unique/:id').get(ticketMgr.unique);
    app.route('/unitwiseticket/:name').get(ticketMgr.unitwiseticket);
    app.route('/deadlinedTicket').get(ticketMgr.deadlinedTicket);
    app.route('/countTicket').get(ticketMgr.countTicket);
    app.route('/editTicket/:id').put(ticketMgr.editTicket);
    app.route('/deleteTicket/:id').delete(ticketMgr.deleteTicket);
};
