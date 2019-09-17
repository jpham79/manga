'use strict';

// Module dependencies
const express = require('express');

module.exports = function(app) {

    console.log("Setting up express.");

    app.set('showStackError', true);
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
};
