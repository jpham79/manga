const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mangaSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true //link to display image
    },
    author: {
        type: String,
        required: true
    },
    chapters: [{
        type:  Schema.Types.ObjectId,
        ref: 'Chapter'
    }],
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }],
    updated: {
        type: Date
    },
    summary: {
        type: String
    },
    ongoing: {
        type: Boolean
    },
    direction: {
        type: String
    },
    stats: {
        rank: {
            type: Number
        },
        reads: {
            type: Number
        },
        chapters: {
            type: Number
        }
    },
    genres: [{
        type: String
    }],
    tags: [{
        type: String
    }],
    otherNames: [{
        type: String
    }],
});

const manga = mongoose.model('Manga', mangaSchema);

module.exports = manga;