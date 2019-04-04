var registerMgr = require('./registration/registerMgr');
var permissionMgr = require('./permission/permissionMgr');

module.exports = function (app) {

    app.route('/register')
        .post(registerMgr.createRegister);
    app.route('/allregister')
        .get(registerMgr.findRegister);
    app.route('/createrole')
        .post(permissionMgr.permissionRole);
    app.route('/allroles')
        .get(permissionMgr.getRoles);

        app.route('/deleteroles/:id')
        .delete(permissionMgr.deleteRoles);

        app.route('/editroles/:id')
        .put(permissionMgr.editRoles);
}