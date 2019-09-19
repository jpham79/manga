const auth = require('../routes/middleware/auth');
const bcyrpt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const user = require('../models/User');

let get = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error: Cannot find user');
    }
}

let post = async (req, res) => {
    const { email, password } = req.body;

    try {
        //See if user exists
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
        }

        //Check if password matches bcrypt password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
        }

        const payload = {
            id: user.id,
            username: user.username,
            email: user.email,
            picture: user.picture,
            subscriptions: user.subscriptions,
            groups: user.groups
        }

        jwt.sign(
            payload,
            config.jwtSecret,
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;

                //return json web token
                res.json({ token });
            });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error: Failed to Authenticate and Send Token');
    }
}

let testAuth = () => {
    return 'Test AUTH';
}

module.exports = { testAuth, get, post }