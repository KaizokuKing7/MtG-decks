const express = require("express");
const app = express();
const appConfig = require("./config/main-config");
const routerConfing = require("./config/route-config");

appConfig.init(app, express);
routerConfing.init(app)

module.exports = app;