const { User } = require("../models");
const bcrypt = require("bcryptjs");

const HomeController = {
    index: (req, res) => { res.render("./home/index") },

    showAbout: (req, res) => { res.render('./home/sobre') },

    showLogin: (req, res) => { res.render('./home/login') },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ where: { email }});

            if (!user || !bcrypt.compareSync(password, user.password)) {
                return res.render('./home/login', { error: "E-mail ou senha não existem" })
            }

           req.session.user = {
            id: user.id,
            name: user.name,
          }

            return res.redirect("/");

        } catch (error) {
            console.log(error);
            return res.render("./home/login", { error: "Sistema indisponível" })
        }

    },

    showRegister: (req, res) => { res.render('./home/cadastrar') },

    store: async (req, res) => {
        try {
            const { name, lastname, email, password } = req.body;

            const verifyUser = await User.findOne({ where: { email } });

            if (verifyUser) {
                return res.render("./home/cadastrar", { error: "Não foi possível realizar o cadastro" });
            }

            const hash = bcrypt.hashSync(password, 10);

            const user = await User.create({
                name,
                lastname,
                email,
                password: hash
            })
            console.log(user)
            return res.redirect("/");
        } catch (error) {
            console.log(error);
            return res.render("./home/cadastrar", { error: "Sistema indisponível" })
        }

    },

    showEdit: (req, res) => { res.render('./home/cadastro') },

    update: (req, res) => { res.render('./home/editar') },

    showDetails: (req, res) => { res.render('./produtos/detalhes') },

    showPedidos: (req, res) => { res.render('./produtos/pedidos') }

}

module.exports = HomeController;