const express = require('express');
const router = express.Router()
const HomeController = require('../controllers/HomeControllers');
// const verifyAuth = require("../middlewares/verifyAuth")

router.get("/", HomeController.index);
router.get("/sobre", HomeController.showAbout);
router.get("/login", HomeController.showLogin);
router.post("/login?", HomeController.login);
router.get("/home/cadastrar", HomeController.showRegister);
router.post("/home/cadastrar", HomeController.store);
router.get("/home/:id/editar", HomeController.showEdit);
router.put("/home/:id/editar", HomeController.update);
router.get('/produtos/:id/detalhes', HomeController.show)
router.get("/logout", HomeController.logout);
router.get("/produtos/categoria/:id", HomeController.showAllProductsCategory)







module.exports = router;