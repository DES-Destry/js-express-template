const routers = [];

module.exports = (app) => routers.forEach((router) => router(app));
