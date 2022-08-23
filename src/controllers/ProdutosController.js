const ProdutosController = {

    index: (req, res) => {
        res.render("adm/lista")
    },

    showRegister: (req, res) => {
        res.render("adm/cadastro")
    },

    register: (req, res) => {
        res.render("adm/cadastro")
    },
    showEdit: (req, res) => {
        res.render('adm/editar')
    },
    update: (req, res) => {
        res.render('adm/editar')
    },
    delete: (req, res) => {
        res.render('adm/lista')
    }
}

module.exports = ProdutosController;