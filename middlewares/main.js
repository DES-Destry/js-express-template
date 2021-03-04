const cors = require('./corsSetup');
const base = require('./baseSetup');
const passport = require('./passportSetup');

const middlewares = [
    cors,
    base,
    passport,
];

module.exports = (app) => middlewares.forEach((middleware) => middleware(app));
