'use strict';

const authController = require('../../controllers/auth');
const authMiddleware = require('../middleware/auth');

module.exports = app => {

    app.route('/api/auth/register')
        .post(authController.register)

    app.route('/api/auth')
        .get(authMiddleware.auth, authController.get)
        .post(authController.post);

    app.route('/api/auth/controller')
        .get((req, res) => {
            res.send(testController.testAuth());
        });
}