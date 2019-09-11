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
        },
        name: {
            type: String
        },
        chapter: {
            type: Number
        },
        page: {
            type: Number
        },
        link: {
            type: String
        }
    },
    group: {
        groupId: {
            type: Schema.Types.ObjectId
        },
        name: {
            type: String
        }
    }
})

const subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = subscription;