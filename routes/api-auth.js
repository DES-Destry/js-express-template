const controller = require('../controller/authController');
const validations = require('../config/validations');

module.exports = (router) => {
    router.get('/', validations.testValidation, controller.auth, controller.test);
};
