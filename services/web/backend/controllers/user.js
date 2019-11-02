const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const mongoose = require('mongoose');
const authMiddleware = require('../../backend/routes/middleware/auth');

const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {

        //check if user exists
        // let user = await User.find({ email });
        // if (user) {
        //     res.status(400).json(user);
        // }


        //Create New User
        user = new User({
            _id: new mongoose.Types.ObjectId,
            username: username,
            password: password,
            picture: "",
            email: email,
            subscriptions: [],
            group: []
        });

        console.log("flag1");

        //Encrypt Password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        //Save new user to database
        await user.save();

        console.log("flag2");

        const payload = {
            user: {
                _id: user._id
            }
        }

        jwt.sign(payload, config.jwtSecret, { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;

            //Return json web token
            res.json({ token });
        });



    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error Registering User Account');
    }
}

module.exports = { register };

