const express = require('express');
const router = express.Router()
const HomeController = require('../controllers/HomeControllers');
const verifyAuth = require("../middlewares/verifyAuth")

router.get("/", HomeController.index);
router.get("/sobre", HomeController.showAbout);
router.get("/login", HomeController.showLogin);
router.post("/login?", HomeController.login);
router.get("/home/cadastrar", HomeController.showRegister);
router.post("/home/cadastrar", HomeController.store);
router.get("/home/editar/:id/editar", HomeController.showEdit);
router.put("/editar/:id", HomeController.update);
router.get("/produtos/detalhes", HomeController.showDetails);
router.get("/produtos/pedidos",verifyAuth, HomeController.showPedidos);
router.get("/logout", HomeController.logout);






module.exports = router;