const servicosController ={
    index:(req, res) => {
        res.render("./produtos/lista")
    },
    show:(req, res) => {
        res.render("./produtos/detalhes")
    },
};

module.exports = servicosController;