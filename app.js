const express = require('express');
const app = express();
const productRoutes = require('./routes/products');
const requestsRoutes = require('./routes/requests');

rotas = [
    productRoutes,
    requestsRoutes
];

app.use('/', rotas);

module.exports = app;

