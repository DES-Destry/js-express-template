const passport = require('passport');
const standarts = require('../config/standarts');
const { unknownError } = require('../config/errors');

module.exports = {
    auth(req, res, next) {
        const response = Object.create(standarts.standartResponse);
        passport.authenticate('jwt', {}, (err, user) => {
            if (err) unknownError(req, res, err);

            if (user) {
                return next();
            }
            response.success = false;
            response.msg = 'User credentials invalid';

            return res.status(401).json(response);
        })(req, res, next);
    },
    test(req, res) {
        res.send('Authenticated!');
    },
};
