require('dotenv').config();

const app = require('express')();
require('./middlewares/main')(app);
require('./routers/main')(app);

module.exports = app;
