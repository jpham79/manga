'use strict';

const path = require('path');
const util = require('util');

const rootPath = path.normalize(__dirname + '/..');
console.log(rootPath);

process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'local';
process.env.port = process.env.PORT ? process.env.PORT: 5000;
process.env.mongo_user = process.env.MONGO_USER ? process.env.MONGO_USER : '';
process.env.mongo_pass = process.env.MONGO_PASS ? process.env.MONGO_PASS : '';
process.env.mongodb = process.env.MONGO_DB ? proccess.env.MONGO_DB : 'mangabois';

module.exports = {
    root: rootPath,
    port: process.env.port,
    host: '',
    mongo: {
        user: process.env.mongo_user,
        password: process.env.mongo_pass,
        db: process.env.mongodb
    }
}