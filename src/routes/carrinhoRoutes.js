const express = require('express');
const router = express.Router()
const CarrinhoController = require('../controllers/CarrinhoController');
const verifyAuth = require("../middlewares/verifyAuth")

router.get("/produtos/lista",CarrinhoController.index);
router.get("/produtos/:id/detalhes",CarrinhoController.show);


module.exports = router;