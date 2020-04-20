const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authSchema = new Schema({
    _id: Schema.Types.ObjectId,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    username: {
        type: String,
        required: true
    },
    salt: {
        type: String,
    },
    password: { // TODO: figure out how to store passwords securely
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
});

const auth = mongoose.model('Auth', authSchema);

module.exports = auth;