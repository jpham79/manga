const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    username: {
        type: String,
        required: true
    },
    password: { // TODO: figure out how to store passwords securely
        type: String,
        required: true
    },
    picture: {
        type: String  //link to profile pic
    },
    email: {
        type: String
    },
    subscriptions: [{
        subscriptionId: {
            type: Schema.Types.ObjectId,
            ref: 'Subscription'
        },
        name: {
            type: String,
            required: true
        },
        category: { //different types of subscriptions
            type: String,
            default: 'manga',
            required: true
        },
        link: {
            type: String,
            required: true
        },
        chapter: {
            type: Number,
        },
        page: {
            type: Number,
        },
        lastUpdated: {
            type: Date
        },
    }],
    groups: [{
        groupId: {
            type: Schema.Types.ObjectId,
            ref: 'Group',
        },
        name: {
            type: String,
        },
        link: {
            type: String
        }
    }]
});

const user = mongoose.model('User', userSchema);

module.exports = user;