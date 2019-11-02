
const jwt = require('jsonwebtoken');
const config = require('../../config/config');

exports.auth = function (req, res, next) {
    // Get token from header
    const token = req.header('manga-auth-token');

    // Check if no token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    //Verify Token
    try {
        const decoded = jwt.verify(token, config.jwtSecret);

        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'token is not valid' });
    }
};