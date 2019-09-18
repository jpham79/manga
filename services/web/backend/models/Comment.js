const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    _id: Schema.Types.ObjectId,
    comment: {
        type: String,
        required: true
    },
    user: {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        username: {
            type: String,
        },
        link: {
            type: String,
        },
    },
    date: {
        type: Date
    },
    rating: {
        type: Number
    },
    manga: {
        mangaId: {
            type: Schema.Types.ObjectId,
            ref: 'Manga',
        },
        name: {
            type: String,
        }
    },
    novel: {
        novelId: {
            type: Schema.Types.ObjectId,
            ref: 'Novel',
        },
        name: {
            type: String,
        }
    },
    chapter: {
        chapterId: {
            type: Schema.Types.ObjectId,
            ref: 'Chapter',
        },
        num: {
            type: Number
        }
    },
    post: {
        postId: {
            type: Schema.Types.ObjectId,
            ref: 'Post',
        }
    },
})

const comment = mongoose.model('Comment', commentSchema);

module.exports = comment;