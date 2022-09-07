const { User, Admin, Product, Category} = require("../models");
const bcrypt = require("bcryptjs");

const HomeController = {
    index: async(req, res) => {
        const products = await Product.findAll()
        res.render("./home/index", {products})
    },
    show: async(req, res) => {
        const {id} = req.params;
        const product = await Product.findByPk(id);
        if(!product) {
            return res.send(`Produto não encontrado`);
        }
        return res.render('./produtos/detalhes', {product});
    },

    showAbout: (req, res) => { res.render('./home/sobre') },

    showLogin: (req, res) => {
        const user = req.query.user
        if (user == "admin") return res.render('./adm/loginAdm')
        res.render('./home/login')
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const isAdmin = req.query.user
            console.log(req.query);
            let user
            if (isAdmin == "admin") {

                user = await Admin.findOne({ where: { email } });

                if (!user || !bcrypt.compareSync(password, user.password)) {
                    return res.render('./adm/loginAdm', { error: "E-mail ou senha não existem" })
                }
                req.session.user = {
                    id: user.id,
                    name: user.name,
                    isAdmin
                }

                return res.redirect("/adm/produtos");
            }

            user = await User.findOne({ where: { email } });

            if (!user || !bcrypt.compareSync(password, user.password)) {
                return res.render('./home/login', { error: "E-mail ou senha não existem" })
            }

            req.session.user = {
                id: user.id,
                name: user.name,
                cart:[]           
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

    showEdit: async (req, res) => {
        const {id} = req.params;
        const user = await User.findByPk(id);
        if(!user) {
            return res.send(`Usuário não encontrado`);
        }
        return res.render('./home/editar', {user});
        },

        update: async (req, res) => {
            try {
                const { name, lastname, email, password } = req.body;

                const {id} = req.params;
    
                const userOld = await User.findByPk(id)
                const hash = password ? bcrypt.hashSync(password, 10):userOld.password
                const user = await User.update ({
                    name,
                    lastname,
                    email,
                    password: hash
                },{
                    where: {id},
                }
                )
                console.log(user)
                return res.redirect("/");
            } catch (error) {
                console.log(error);
                return res.render("./home/cadastrar", { error: "Sistema indisponível" })
            }
        },

    showDetails: (req, res) => { res.render('./produtos/detalhes') },

    logout: (req, res) => {
        if (req.session.user) {
            req.session.destroy()
            delete res.locals.user
        }

        return res.redirect('/')
    },
    showAllProductsCategory: async (req, res) => {
        const { id } = req.params;
        const products = await Product.findAll({
                where: {
                    category_id: id
                }
        })
        return res.render('./home/index', {products})
    }

}

module.exports = HomeController;