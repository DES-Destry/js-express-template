const { Schema, model } = require('mongoose');
const jwt = require('jsonwebtoken');

const config = require('../config/config');

const schema = new Schema({
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
});

schema.methods.genToken = function genToken() {
    const { username } = this;
    return jwt.sign({ username }, config.jwtValue);
};

module.exports = model('User', schema);
