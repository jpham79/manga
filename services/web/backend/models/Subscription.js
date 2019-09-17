const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: 'manga',
        required: true
    },
    link: {
        type: String,
        required: true
    },
    manga: {
        mangaId: {
            type: Schema.Types.ObjectId,
            ref: 'Manga',
        },
        name: {
            type: String,
        },
        chapter: {
            type: Number,
            required: function () {
                return this.manga || this.category === 'manga' ? true : false;
            }
        },
        page: {
            type: Number,
            required: function () {
                return this.manga || this.category === 'manga' ? true : false;
            }
        },
        link: {
            type: String
        }
    },
    group: {
        groupId: {
            type: Schema.Types.ObjectId,
            ref: 'Group',
        },
        name: {
            type: String
        },
        link: {
            type: String,
        }
    },
    user: {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        username: {
            type: String,
        },
        link: {
            type: String,
        },

    }
})

const subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = subscription;