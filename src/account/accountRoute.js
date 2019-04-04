var loginMgr = require('./login/loginMgr');

module.exports = function (app) {
    app.route('/admin')
        .post(loginMgr.createLoginDetail);
    app.route('/admin/validate')
        .post(loginMgr.loginVerify);
}