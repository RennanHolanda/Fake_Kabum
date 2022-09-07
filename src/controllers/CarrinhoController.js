const { Product, Request, OrderHasProduct, Categoria } = require("../models");

const servicosController ={
    index:async(req, res) => {
        const productsInCart = req.session.user.cart
        const products = await Product.findAll({
            where: {
              id: productsInCart
            }
          });
        res.render("./produtos/pedidos",{products})
    },

    addToCart:(req, res)=> {
        const { id } = req.params; 
        req.session.user.cart.push(parseInt(id))
        console.log(req.session.user.cart)
        return res.redirect("/")

    },
    finishBuy: async (req, res) => {
        const productsInCart = req.session.user.cart
        const id = req.session.user.id
        const products = await Product.findAll({
           where: {id:productsInCart} 
        }) 
        let totalValue = 0
        productsInCart.forEach(id => {
            products.forEach(produto => {
                if(produto.id == id){
                    totalValue += produto.value
                }
            })
        })
        const newRequest = await Request.create({
            total_value:totalValue,
            purchase_date: new Date(),
            user_id: id
        })
        console.log(newRequest)
        productsInCart.forEach(async productId => {
            await OrderHasProduct.create({
                request_id: newRequest.id,
                product_id: productId
            })
        });
        req.session.user.cart = [];
        return res.redirect('/');
    },
    delete: async(req, res) => {
        try {
          const productsInCart = req.session.user.cart;
          const {id} = req.params; 
          const productToRemove = productsInCart.findIndex(idArray => idArray ==id)
          productsInCart.splice(productToRemove, 1);
          req.session.user.cart = productsInCart
          return res.redirect("/produtos/pedidos");
    
        } catch (error) {
            console.log(error);
            return res.render("./home/produtos/pedidos", { error: "Sistema indisponível" })
        } 
    }
    
};

module.exports = servicosController;