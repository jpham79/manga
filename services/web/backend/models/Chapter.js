const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chapterSchema = new Schema({
    _id: Schema.Types.ObjectId,
    num: {
        type: Number,
        required: true
    },
    pages: [{
        num: {
            type: String
        },
        link: {
            type: String //Url to a page
        },
    }],
    manga: {
        mangaId: {
            type: Schema.Types.ObjectId,
            ref: 'Manga',
        },
        name: {
            type: String,
            required: function () {
                return this.manga ? true : false;
            }
        }
    },
    novel: {
        novelId: {
            type: Schema.Types.ObjectId,
            ref: 'Novel',
        },
        name: {
            type: String,
            required: function () {
                return this.novel ? true : false;
            }
        }
    },
    name: {
        type: String
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    contributors: [{
        userId: {
            types: Schema.Types.ObjectId,
            ref: 'User'
        },
        username: {
            type: String
        },
    }],
    source: {
        type: String
    }
})

const chapter = mongoose.model('Chapter', chapterSchema);

module.exports = chapter;