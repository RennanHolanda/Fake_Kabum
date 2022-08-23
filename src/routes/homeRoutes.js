const express = require('express');
const router = express.Router()
const HomeController = require('../controllers/HomeControllers');

router.get("/", HomeController.index);
router.get("/sobre", HomeController.showAbout);
router.get("/login", HomeController.login);
router.post("/login", HomeController.postLogin);
router.get("/home/cadastrar", HomeController.showRegister);
router.post("/home/cadastrar", HomeController.register);
router.get("/home/editar/:id/editar", HomeController.showEdit);
router.put("/editar/:id", HomeController.update);
router.get("/produtos/detalhes", HomeController.showDetails);
router.get("/produtos/pedidos", HomeController.showPedidos);






module.exports = router;