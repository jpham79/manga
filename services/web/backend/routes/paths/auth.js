'use strict';

const testController = require('../../controllers/auth');

module.exports = app => {
    app.route('/api/auth')
        .get((req, res) => {
            res.send("yeet the auth routing is set up");
        });
    app.route('/api/auth/controller')
        .get((req, res) => {
            res.send(testController.testAuth());
        });
}