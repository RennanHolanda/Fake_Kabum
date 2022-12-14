const express = require('express');
const router = express.Router()
// const produtos = require('../db');
const { v4: gerarId } = require("uuid");
const ProdutosController = require('../controllers/ProdutosController');
const verifyIsAdmin = require('../middlewares/verifyIsAdmin');
router.use(verifyIsAdmin);

router.get("/adm/produtos",ProdutosController.index);
router.get("/adm/produtos/cadastro",ProdutosController.showRegister);
router.post("/adm/produtos/cadastro",ProdutosController.register);
router.get("/adm/produtos/:id/editar",ProdutosController.showEdit);
router.put("/adm/produtos/:id/editar",ProdutosController.update);
router.delete("/adm/produtos/:id",ProdutosController.delete);





module.exports = router;