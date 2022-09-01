const { Product } = require("../models")

const ProdutosController = {

    index: async (req, res) => {
        const products = await Product.findAll()
        res.render("adm/lista", {products})
    },

    showRegister: (req, res) => {
        res.render("adm/cadastro")
    },

    register: async (req, res) => {
            try {
                const { title, description, value, image, category_id } = req.body;
    
                    const product = await Product.create({
                    title,
                    description,
                    value,
                    image,
                    category_id
                })
                console.log(product)
                return res.redirect("/adm/produtos/cadastro");
            } catch (error) {
                console.log(error);
                return res.render("./adm/lista", { error: "Sistema indisponível" })
            }
       
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