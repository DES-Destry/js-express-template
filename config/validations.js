const { check, validationResult } = require('express-validator');
const standarts = require('./standarts');

module.exports = {
    validateRequest: function (req, res) {
        const response = Object.create(standarts.standartResponse);

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            response.success = false;
            response.msg = 'Validation error';
            response.content = errors.array();

            res.status(400).json(response);
        }
    },
    testValidation: [
        check('someValue', 'Must be not empty').notEmpty(),
    ],
};
