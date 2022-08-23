const HomeController = {
    index : (req, res) => { res.render("home/index") },

    showAbout: (req, res) => { res.render('home/sobre') },

    login: (req, res) => {res.render('home/login')},

    postLogin : (req, res) => {res.render('home/login')},

    showRegister: (req, res) => {res.render('home/cadastrar')},

    register: (req, res) => {res.render('home/cadastrar')},

    showEdit: (req, res) => {res.render('home/cadastro')},

    update: (req, res) => {res.render('home/editar')},

    showDetails: (req, res) => {res.render('produtos/detalhes')},

    showPedidos: (req, res) => {res.render('produtos/pedidos')}

}

module.exports = HomeController;