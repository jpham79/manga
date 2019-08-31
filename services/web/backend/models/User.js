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
        type: Schema.Types.ObjectId,
        ref: 'Subscription'
    }],
    groups: [{
        groupId: {
            type: Schema.Types.ObjectId
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