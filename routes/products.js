const express = require('express');
const router = express.Router();

router.route('/products/:id_product')
    // retorna um pedido especifico
    .get((req, res, next) => {
        idProduct = req.params.id_product;
        if (idProduct === 'chavemestra') {
            res.status(200).send({
                msg: 'você está logado com a chave mestre',
                id: idProduct
            });    
        } else {
            res.status(200).send({
                msg: 'você está logado com a chave normal',
            });
        }
    })
    // deleta um pedido especifico
    .delete((req, res, next) => {
        idProduct = req.params.id_product;
        res.status(200).send({
            msg: 'arquivo' + req.body.idProduct + ' foi destruido'
        });
    })
router.route('/products')
    // retorna todos os pedidos
    .get((req, res, next) => {
        res.status(200).send({
            msg: 'usando o get dentro da rota products'
        });
    })
    // insere um pedido
    .post((req, res, next) => {
        const product = {
            nome: req.body.nome,
            preco: req.body.preco
        };
        res.status(201).send({
            msg: 'usando o post dentro da rota products',
            productCreated: product
        });
    })
    // altera um produto
    .patch((req, res, next) => {
        res.status(201).send({
            msg: 'usando o path dentro da rota products'
        });
    })
module.exports = router;