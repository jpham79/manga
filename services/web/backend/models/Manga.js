const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mangaSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    chapters: [{
        type:  Schema.Types.ObjectId,
        ref: 'Chapter'
    }],
    author: {
        type: String
    },
    updated: {
        type: Date
    },
    summary: {
        type: String
    },
    ongoing: {
        type: Boolean
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