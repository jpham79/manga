const Chapter = require('../models/Chapter');

const getById = (req, res) => {
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

const get = (req, res) => {
    Chapter
        .findOne({
            "manga.name": req.params.mangaName.replace(/_/g, ' '),
            num: req.params.chapterNum,
        })
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

module.exports = { get, getById }