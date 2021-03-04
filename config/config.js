module.exports = {
    port: process.env.PORT || 3000,
    localDb: process.env.LOCAL_DB,
    productionDb: process.env.PRODUCTION_DB,
    saltValue: process.env.SALT_SECRET,
    jwtValue: process.env.JWT_SECRET,
    env: process.env.NODE_ENV,
};
