'use strict';

const path = require('path');
const util = require('util');

const rootPath = path.normalize(__dirname + '/..');
console.log(rootPath);

process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'local';
process.env.port = process.env.PORT || 3000;

module.exports = {
    root: rootPath,
    port: process.env.port
}