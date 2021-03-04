require('dotenv').config();

const app = require('express')();
require('./middlewares/main')(app);
require('./routers/main')(app);
const config = require('./config/config');
const mongo = require('./config/mongo-config');

mongo((err) => {
    if (err) {
        console.error(err);
        return;
    }

    app.listen(config.port, () => console.log(`Server has been started at port: ${config.port}`));
});
