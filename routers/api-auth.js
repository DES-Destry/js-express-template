const router = require('express').Router();

const path = '/api/auth';

require('../routes/api-auth')(router);

module.exports = (app) => app.use(path, router);
