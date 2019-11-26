const Manga = require('../models/Manga');



const get = (req, res) => {
    Manga
        .findById(req.params.mangaId)
        .exec((err, manga) => {
            if (err) {
                console.error(err);
                return res.status(500).end()
            }
            if (!manga) {
                res.status(404).send("Not found.");
            } else {
                res.json(manga);
            }
        })
}
/**
 * Takes the route parameter of a manga name and attempts to query for it in the name field.
 * If that fails, it tries to search through the otherNames array.
 * 
 * @param  {string} req.params.name
 * @param  {Manga} res returns the found Manga
 */
const getByName = (req, res) => {
    Manga.findOne({ name: req.params.name }, (err, manga) => {
        if (err) {
            console.error(err);
        }
        if (!manga) {
            console.log(req.params.name)
            Manga
                .findOne({ otherNames: { $in: [req.params.name] } })
                .exec((err, manga) => {
                    if (err) {
                        console.error(err);
                    }
                    if (!manga) {
                        res.status(404).send("Not found.");
                    } else {
                        console.log(`Successfully found: ${manga.name}`);
                        res.json(manga);
                    }
                })
        } else {
            console.log(`Successfully found: ${manga.name}`);
            res.json(manga);
        }
    });
}

const getLatest = (req, res) => {
    Manga
        .find()
        .sort('updated')
        .exec((err, mangalist) => {
            console.log('test');
            
            if (err) {
                console.error(err);
                return res.status(500).end()
            }
            if (!mangalist) {
                res.status(404).send("Not found.");
            } else {
                res.json(mangalist);
            }
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
            if (!mangalist) {
                res.status(404).send("Not found.");
            } else {
                res.json(mangalist);
            }
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

module.exports = { get, getByName, list, criteria, getLatest };