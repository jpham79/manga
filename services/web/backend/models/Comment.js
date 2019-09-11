const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    _id: Schema.Types.ObjectId,
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
    comment: {
        type: String,
        required: true
    },
    user: {
        userId: Schema.Types.ObjectId,
        name: String,
        profile: String
    },
    date: {
        type: Date
    },
    rating: {
        type: Number
    }
})

const comment = mongoose.model('Comment', commentSchema);

module.exports = comment;