'use strict';

const chapter = require('../../controllers/chapter');
const pagination = require('../middleware/pagination');

module.exports = app => {

    app.route('/api/manga/chapter/id/:chapterId')
        .get(chapter.getById)

    app.route('/api/manga/:mangaName/chapter/:chapterNum')
        .get(chapter.get)
}