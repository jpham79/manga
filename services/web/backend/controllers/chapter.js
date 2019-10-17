const Chapter = require('../models/Chapter');

const getChapter = (req, res) => {
    Chapter
        .findById(req.params.chapterId)
        .exec((err, chapter) => {
            if (err) {
                console.error(err);
                return res.status(500).end()
            }
            if (chapter.length === 0) {
                res.status(404).send("Not found.");
            }
            res.json(chapter);
        })
}

module.exports = { getChapter }