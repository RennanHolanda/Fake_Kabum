const express = require('express');
const router = express.Router()
const CarrinhoController = require('../controllers/CarrinhoController');
const verifyAuth = require("../middlewares/verifyAuth")

router.get("/produtos/pedidos",verifyAuth,CarrinhoController.index);
router.get("/produtos/:id/adicionar/carrinho", verifyAuth, CarrinhoController.addToCart);
router.post("/produtos/carrinho/finalizar", CarrinhoController.finishBuy);
router.get("/produtos/pedidos/:id/remover", CarrinhoController.delete)


module.exports = router;