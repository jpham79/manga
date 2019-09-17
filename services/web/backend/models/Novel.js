const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * THIS MODEL IS A WORK IN PROGRESS. It strays from our current schema right now, so we'll need to adjust this
 */

const novelSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    altNames: [{
        type: String,
    }],
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

})

const novel = mongoose.model('Novel', novelSchema);

module.exports = novel;
