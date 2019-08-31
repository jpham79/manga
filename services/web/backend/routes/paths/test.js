'use strict';

const testController = require('../../controllers/test')

module.exports = app => {
    app.route('/api/test')
        .get((req, res) => {
            res.send("yeet the routing is set up");
        });
    app.route('/api/test/controller')
        .get((req, res) => {
            res.send(testController.test());
        });
}