const mongoose = require('mongoose');

class Model {

    constructor(uri, options) {
        this.uri = uri;
        this.options = options;
    }

    connect(callback) {
        console.log(`Attempting to connect to MongoDB at: ${this.uri}`);
        mongoose.connect(this.uri, this.options, err => {
            if (err) {
                callback(err);
            } else {
                console.log("MongoDB connected successfully.");
            }
        });
    };

    reconnect(callback) {
        console.log("Restarting MongoDB connection..");
        mongoose.connection.close(() => {
            console.log(`Attempting to connect to MongoDB at: ${this.uri}`);
            mongoose.connect(this.uri, this.options, err => {
                if (err) {
                    callback(err);
                } else {
                    console.log("MongoDB connected successfully.");
                }
            });
        });

    }
}

module.exports = Model;
