const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chapterSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String
    },
    manga: {
        mangaId: Schema.Types.ObjectId,
        name: {
            type: String,
            required: true
        }
    },
    num: {
        type: Number,
        required: true
    },
    pages: [{
        num: {
            type: String
        },
        url: {
            type: String //Url to a page
        },
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    contributors: [{
        username: {
            type: String
        },
        userId: {
            types: Schema.Types.ObjectId,
            ref: 'User'
        }
    }]
})

const chapter = mongoose.model('Chapter', chapterSchema);

module.exports = chapter;