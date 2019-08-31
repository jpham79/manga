const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chapterSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: {
        type: String
    },
    mangaName: {
        type: String
    },
    chapterNum: {
        type: Number
    },
    pages: [{
        type: String //Url to a page
    }],
    comments: [{
        type: Schema.Types.ObjectId
    }],
    contributors: [{
        types: Schema.Types.ObjectId,
        ref: 'User'
    }] 
})

const chapter = mongoose.model('Chapter', chapterSchema);

module.exports = chapter;