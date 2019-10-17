'use strict';

const chapter = require('../../controllers/chapter');
const pagination = require('../middleware/pagination');

module.exports = app => {

    app.route('/api/manga/chapter/:chapterId')
        .get(chapter.getChapter)
}