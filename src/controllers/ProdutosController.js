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
    showEdit: async(req, res) => {
        const {id} = req.params;
        const product = await Product.findByPk(id);
        if(!product) {
            return res.send(`Produto não encontrado`);
        }
        return res.render('./adm/editar', {product});
    },
    update: async(req, res) => {
        try {
            const { title, description, value, image, category_id } = req.body;
            const {id} = req.params;
                const product = await Product.update({ 
                title,
                description,
                value,
                image,
                category_id
            },{
               where:{id} 
            }
            )
            console.log(product)
            return res.redirect("/adm/produtos");
        } catch (error) {
            console.log(error);
            return res.render("./adm/lista", { error: "Sistema indisponível" })
        }
    },
    delete: async(req, res) => {
        try {
            const {id} = req.params;

        await Product.destroy({
            where: {
              id
            }
          });
          return res.redirect("/adm/produtos");

        } catch (error) {
            console.log(error);
            return res.render("./adm/lista", { error: "Sistema indisponível" })
        } 
    }
}

module.exports = ProdutosController;