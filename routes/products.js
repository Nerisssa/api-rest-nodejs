const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

router.route('/products/:id_product')
    // retorna um pedido especifico
    .get((req, res, next) => {
        mysql.execute(
            'SELECT * FROM produtos WHERE idprodutos = ?;',
            [req.params.id_product], function(err, results, fields) {
                if (err) {
                    return res.status(500).send({
                        error: err, 
                        response: null
                    })
                }
                res.status(200).send({
                    response: results
                })
            }
        )
    })
    // deleta um pedido especifico
    .delete((req, res, next) => {
        mysql.execute(
            'DELETE FROM produtos WHERE idprodutos = ?;',
            [req.params.id_product], function(err, results, fields) {
                if (err) {
                    return res.status(500).send({
                        erro: err,
                        response: null
                    })
                }
                res.status(202).send({
                    response: "Dado excluido com sucesso!",
                    responses: results
                })
            }
        )
    })
router.route('/products')
    // retorna todos os pedidos
    .get((req, res, next) => {
        mysql.execute(
            'SELECT * FROM produtos;', function(err, results, fields) {
                if (err) {
                    return res.status(500).send({
                        error: err,
                        response: null
                    })
                }
                res.status(200).send({
                    response: results
                })
            }
        )
    })
    // insere um pedido
    .post((req, res, next) => {
        mysql.execute(
            'INSERT INTO produtos (nome, preco) VALUES (?,?);',
            [req.body.nome, req.body.preco], function(err, results, fields) {
                if (err) {
                    return res.status(500).send({
                        error: err,
                        response: null
                    })
                }
                res.status(201).send({
                    message: 'Produto adicionado com sucesso!',
                    idProduct: results.insertId
                })
            }
        )
    })
    // altera um produto
    .patch((req, res, next) => {
        mysql.execute(
            `UPDATE produtos 
                SET nome = ?,
                    preco = ?
                WHERE idprodutos = ?;`,
            [
                req.body.nome,
                req.body.preco,
                req.body.idprodutos
            ], function(err, results, fields) {
                if (err) {
                    return res.status(500).send({
                        error: err,
                        response: null
                    })
                }
                res.status(202).send({
                    response: "Produto alterado com sucesso!",
                    resposes: results
                })
            }
        )
    })
module.exports = router;