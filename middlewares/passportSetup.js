const passport = require('passport');

module.exports = (app) => {
    app.use(passport.initialize({}));
};
