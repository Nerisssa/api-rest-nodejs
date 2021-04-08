const express = require('express');
const router = express.Router();
const data = require('../requests.json');

router.route('/requests/:id_product')
    // retorna um pedido especifico
    .get((req, res, next) => {
        idProduct = req.params.id_product;
        produto = req.params.productName;
        product = data.find(product => product.nomeProduto == "Feijão");
        res.status(200).send({
            msg: 'você está logado com a chave mestre',
            id: idProduct,
            prdct: product
        });    
    })
    // deleta um pedido especifico
    .delete((req, res, next) => {
        idProduct = req.params.id_product;
        res.status(200).send({
            msg: 'arquivo ' + req.body.idProduct + ' foi destruido'
        });
    })
router.route('/requests')
    // retorna todos os pedidos
    .get((req, res, next) => {
        res.status(200).send({
            msg: 'usando o get dentro da rota requests'
        });
    })
    // insere um pedido
    .post((req, res, next) => {
        const requests = {
            idProduct: req.body.idProduct,
            quantidade: req.body.quantidade
        };
        res.status(201).send({
            msg: 'usando o post dentro da rota requests',
            productRequest: requests
        });
    })
    // altera um produto
    .patch((req, res, next) => {
        res.status(201).send({
            msg: 'usando o path dentro da rota requests'
        });
    })
module.exports = router;