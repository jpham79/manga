'use strict';

const { buildSanitizeFunction, buildCheckFunction } = require('express-validator');
const sanitizeQuery = buildSanitizeFunction(['query']);
const checkQuery = buildCheckFunction(['query']);

/*
 * Pagination middleware. Sets the appropriate request
 * parameters for paging through large result sets.
 */
exports.paginate = function (req, res, next) {

    req.pagination = {};

    // Validate input parameters parameters
    checkQuery('page', 'Invalid page size.').optional().isInt({ min: 0, max: 65535 });
    checkQuery('pageSize').optional().isInt({ min: 0, max: 100 });

    // Populate the page number.
    // Defaults to 1
    req.pagination.page = sanitizeQuery('page').toInt();

    // Ensure page is greater than 0.  If so, defualt to 1.
    if (req.pagination.page < 1) req.query.page = 1;

    // Populate the page size.
    // Defaults to 25
    req.pagination.pageSize = sanitizeQuery('pageSize').toInt();

    // Ensure pageSize is greater than -1.
    // A page size of 0 implies no page size and the
    // entire result set should be returned.
    if (req.pagination.pageSize < 0) req.query.pageSize = 25;

    // Calculate the number of records to skip.
    req.pagination.skip = (req.query.page - 1) * req.query.pageSize;

    next();
};