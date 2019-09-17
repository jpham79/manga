const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mangaSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    altNames: [{
        type: String,
    }],
    image: {
        type: String,
        required: true //link to display image
    },
    author: {
        type: String,
        required: true
    },
    chapters: [{
        chapterId: {
            type: Schema.Types.ObjectId,
            ref: 'Chapter'
        },
        num: {
            type: Number
        },
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
});

const manga = mongoose.model('Manga', mangaSchema);

module.exports = manga;