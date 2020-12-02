const cors = require('cors');

const settings = {
    origin: '*',
    optionsSuccessStatus: 200,
};

module.exports = (app) => {
    app.use(cors(settings));
};
