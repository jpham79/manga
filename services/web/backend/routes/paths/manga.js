'use strict';

const manga = require('../../controllers/manga');
const pagination = require('../middleware/pagination');

module.exports = app => {
    app.route('/api/manga')
        .get(pagination.paginate, manga.criteria, manga.list);

    app.route('/api/manga/:id')
        .get(manga.get)
    
    app.route('/api/manga/name/:name')
        .get(manga.getByName)
}