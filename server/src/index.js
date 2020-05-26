require('dotenv/config');
const express = require('express');

const middleware = require('./config/middleware');
const routes = require('./config/routes');
const app = express();

middleware(app);
routes(app);

module.exports = app;