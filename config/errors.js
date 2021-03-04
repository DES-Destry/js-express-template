const standarts = require('./standarts');
const logger = require('../dev/logger');

module.exports = {
    unknownError: function (req, res, err) {
        const response = Object.create(standarts.standartResponse);

        response.success = false;
        response.msg = err.message;
        response.content = err;

        res.status(500).json(response);

        logger.logError({ body: req.body, response });
    },
};
