const express = require('express');
const router = express.Router()
// const produtos = require('../db');
const { v4: gerarId } = require("uuid");
const ProdutosController = require('../controllers/ProdutosController');

router.get("/adm/produtos",ProdutosController.index);
router.get("/adm/produtos/cadastro",ProdutosController.showRegister);
router.post("/adm/produtos",ProdutosController.register);
router.get("/adm/produtos/:id/editar",ProdutosController.showEdit);
router.put("/adm/produtos/:id",ProdutosController.update);
router.delete("/adm/produtos/:id",ProdutosController.delete);





module.exports = router;