const config = require('./config/config');
const mongo = require('./config/mongo-config');
const logger = require('./dev/logger');
const app = require('./app');

mongo((err) => {
    if (err) {
        console.error(err);
        logger.logError(err);
        return;
    }

    app.listen(config.port, () => console.log(`Server has been started at port: ${config.port}`));
});
