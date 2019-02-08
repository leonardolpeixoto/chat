const http = require('http')
const express = require('express');
const routes = require('./routes');

const app = express();

const httpServer = http.createServer(app);

routes(app);

httpServer.listen(8080);