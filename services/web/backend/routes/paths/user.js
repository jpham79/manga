'use strict';

//const userController = require('../../controllers/user')
const authMiddleware = require('../../routes/middleware/auth');
const userController = require('../../controllers/user');

module.exports = app => {
    app.route('/api/user')
        .get((req, res) => {
            res.send("yeet the routing is set up");
        })
        .post(userController.register);
    app.route('/api/user/controller')
        .get((req, res) => {
            res.send(testController.test());
        });
}