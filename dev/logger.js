const winston = require('winston');

function getLogger() {
    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.json({ space: 4 }),
        defaultMeta: { date: Date.now() },
        transports: [
            new winston.transports.File({ level: 'error', dirname: 'log', filename: 'errors.log' }),
            new winston.transports.File({ level: 'info', dirname: 'log', filename: '.log' }),
        ],
    });

    return logger;
}

module.exports = getLogger();
module.exports.logError = (logData) => {
    getLogger().log({
        level: 'error',
        message: logData,
    });
};
module.exports.logInfo = (logData) => {
    getLogger().log({
        level: 'info',
        message: logData,
    });
};
