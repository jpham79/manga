'use strict';

module.exports = app => {
    app.route('/api/test')
        .get((req, res) => {
            res.send("yeet the routing is set up");
        });
}