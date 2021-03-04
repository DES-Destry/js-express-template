const apiAuth = require('./api-auth');

const routers = [apiAuth];

module.exports = (app) => routers.forEach((router) => router(app));
