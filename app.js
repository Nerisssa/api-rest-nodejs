const express = require('express');
const app = express();
const productRoutes = require('./routes/products');
const requestsRoutes = require('./routes/requests');
const morgan = require('morgan');
const bodyParser = require('body-parser');

rotas = [
    productRoutes,
    requestsRoutes
];

app.use(morgan('dev')); // usando o morgan para mostrar quais requisições estão chegando no servidor, 'dev' vem no 'package.json' em 'devDependences'
app.use(bodyParser.urlencoded({ extended: false })); // utiliza apenas dados simples
app.use(bodyParser.json()); // utiliza apenas json de entrada de dados no body
app.use('/', rotas);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // '*' para permitir que qualquer origem acesse o recurso; <url> especifica a URI que pode acessar o
    res.header(
        'Access-Control-Allow-Header',
        'Origin, Content-Type, X-Requested-With, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, PATH, POST, DELETE, GET');
        return res.status(200).send({});
    }
    next();
})

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

