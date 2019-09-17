const Manga = require('../models/Manga');


const get = (req, res) => {
    Manga.find({ name: req.params.name }, (err, data) => {
        if (err) {
            console.error(err);
        }
        console.log(`Successfully found: ${data.name}`);
        res.json(data);
    });
}

const list = (req, res) => {
    Manga
        .find(req.criteria)
        .sort('name')
        .exec((err, mangalist) => {
            if (err) {
                console.error(err);
                return res.status(500).end()
            }
            res.json(mangalist);
        });
}


const criteria = (req, res, next) => {
    req.criteria = {};
    if (req.query.tags) {
        req.criteria.tags = { "$in": req.query.tags };
    }
    if (req.query.genre) {
        req.criteria.genre = { "$in": req.query.genres };
    }
    if (req.stats) {
        req.criteria.stats = req.query.stats;
    }
    if (req.ongoing) {
        req.criteria.ongoing = req.query.ongoing;
    }
}

module.exports = { get, list, criteria };