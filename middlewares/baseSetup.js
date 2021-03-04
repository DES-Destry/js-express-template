const express = require('express');
const helmet = require('helmet');

module.exports = (app) => {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(helmet());
};
