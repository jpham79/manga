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
            if (mangalist.length === 0) {
                res.status(404).send("Not found.");
            } 
            res.json(mangalist);
        });
}


const criteria = (req, res, next) => {
    req.criteria = {};
    if (req.query.name) {

    }
    if (req.query.tags) {
        req.criteria.tags = { "$in": req.query.tags };
    }
    if (req.query.genres) {
        req.criteria.genres = { "$in": req.query.genres };
    }
    if (req.query.stats) {
        req.criteria.stats = req.query.stats;
    }
    if (req.query.ongoing) {
        req.criteria.ongoing = req.query.ongoing;
    }
    next();
}

module.exports = { get, list, criteria };