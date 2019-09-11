const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chapterSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    manga: {
        mangaId: Schema.Types.ObjectId,
        name: {
            type: String,
            required: true
        }
    },
    chapter: {
        chapterId: Schema.Types.ObjectId,
        num: {
            type: Number,
            required: true
        }
    },
    pages: [{
        type: String //Url to a page
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    contributors: [{
        types: Schema.Types.ObjectId,
        ref: 'User'
    }] 
})

const chapter = mongoose.model('Chapter', chapterSchema);

module.exports = chapter;