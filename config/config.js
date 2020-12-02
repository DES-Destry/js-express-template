module.exports = {
    port: process.env.PORT || 3000,
    localDb: process.env.LOCAL_DB,
    productionDb: process.env.PRODUCTION_DB,
    sessionConfig: process.env.SESSION_VALUE,
};
