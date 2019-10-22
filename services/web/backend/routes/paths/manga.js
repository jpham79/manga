'use strict';

const manga = require('../../controllers/manga');
const pagination = require('../middleware/pagination');

module.exports = app => {
    app.route('/api/manga')
        .get(pagination.paginate, manga.criteria, manga.list);

    app.route('/api/manga/id/:id')
        .get(manga.getById)
    
    app.route('/api/manga/:name')
        .get(manga.get)
}