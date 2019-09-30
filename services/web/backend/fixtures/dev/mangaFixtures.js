const async = require('async');
const Manga = require('../../models/Manga');

const mangas = [{
    name: 'TestMangaX',
    author: 'Yeti Boi5000',
    image: "https://www.leisureopportunities.co.uk/images/imagesX/HIGH340040_155465_768692.jpg",
    summary: "In a world of no imagination, I came up with this manga",
}];

module.exports = fixturesCallback => {
    async.each(mangas, (manga, cb) => {
        Manga.updateOne(
            {
                name: manga.name
            },
            manga,
            {
                upsert: true
            },
            cb
        )
    }, err => {
        if (err) {
            console.log("Error loading Manga into DB");
            console.error(err);
            fixturesCallback(err);
        }
        console.log("Finished loading mangas");
        
    });
}