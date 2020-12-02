require('dotenv').config();

const app = require('express')();
require('./middlewares/main')(app);
require('./routers/main')(app);
const config = require('./config/config');

app.listen(config.port, () => console.log(`Server has been started at port: ${config.port}`));
