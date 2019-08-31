const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chapterSchema = new Schema({
    _id: Schema.Types.ObjectId,
    pages: [{
        type: String //Url to a page
    }],
    comments: [{
        type: Schema.Types.ObjectId
    }] 
})

const chapter = mongoose.model('Chapter', chapterSchema);

module.exports = chapter;