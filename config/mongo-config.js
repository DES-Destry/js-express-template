const mongoose = require('mongoose');

const config = require('./config');

module.exports = (cb) => {
    const connectionString = (config.env === 'development') ? config.localDb : config.productionDb;
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
        .then(() => cb())
        .catch((err) => cb(err));
};
