const express = require("express");
const morgan = require("morgan");

//init
const app = express();

//Configuraciones
app.set("port", process.env.PORT || 2000);

//Middelware
const middleware = require("../middlewares/middlewares");
app.use(middleware);

//Routers
const routes = require("../routers/router");
app.use(routes);

module.exports = app;
