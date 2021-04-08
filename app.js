const express = require('express');
const app = express();
const productRoutes = require('./routes/products');
const requestsRoutes = require('./routes/requests');
const morgan = require('morgan');

rotas = [
    productRoutes,
    requestsRoutes
];

app.use(morgan('dev'));
app.use('/', rotas);

// tratando erro de rota invalída
app.use((req, res, next) => {
    const error = new Error('Rota não encontrada');
    error.status = 404;
    next(error);
});

// retornando erro na requisição, error 404
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        "ERROR 404": {
            msg: error.message
        }
    });
})

module.exports = app;

