//const auth = require('../routes/middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const mongoose = require('mongoose');

const User = require('../models/User');
const Auth = require('../models/Auth');

const register = async (req, res) => {
    console.log('hi')
    const { username, email, password } = req.body;
    //check if user exists
    let user = await User.findOne({ email });
    if (user) {
        console.log('nani')
        return res.status(400).json(user);
    }
    try {
        const id = new mongoose.Types.ObjectId
        console.log('this far')
        console.log(password)
        auth = new Auth({
            _id: new mongoose.Types.ObjectId,
            userId: id,
            username,
            email,
            password,
        });

        //Create New User
        user = new User({
            _id: id,
            username,
            picture: "",
            email,
            subscriptions: [],
            group: []
        });

        console.log("flag1");

        //Encrypt Password
        auth.salt = await bcrypt.genSalt(10);
        auth.password = await bcrypt.hash(password, auth.salt);

        //Save new user registration to the database
        await auth.save();
        await user.save();

        console.log("flag2");

        const payload = {
            user: {
                _id: user._id,
            }
        }

        jwt.sign(payload, config.jwtSecret, { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;

            //Return json web token
            return res.json({ token });
        });



    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error Registering User Account');
    }
}

let get = async (req, res) => {
    try {
        console.log("User ID: " + req.user.id)
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
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                picture: user.picture,
                subscriptions: user.subscriptions,
                groups: user.groups
            }
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

module.exports = { testAuth, get, post, register }