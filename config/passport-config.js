const { Strategy, ExtractJwt } = require('passport-jwt');
const User = require('../model/User');
const config = require('./config');

const opts = {
    secretOrKey: config.jwtValue,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

async function jwtVerify(payload, done) {
    try {
        const { username } = payload;

        const findedUser = await User.findOne({ username });

        if (findedUser) {
            done(null, findedUser);
        } else {
            done(null, false);
        }
    } catch (err) {
        done(err);
    }
}

module.exports = (passport) => passport.use(new Strategy(opts, jwtVerify));
