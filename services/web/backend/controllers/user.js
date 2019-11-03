const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const mongoose = require('mongoose');
const authMiddleware = require('../../backend/routes/middleware/auth');


