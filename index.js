//Importar o express
const express = require('express');
const app = express();
const path = require('path');
const session = require("express-session");
const logger = require('morgan')
const isLoggedIn = require("./src/middlewares/isLoggedIn")
const methodOverride = require('method-override')

//Configurações do servidor
app.set('view engine', 'ejs');
app.set('views', 'src/views'); 

// Middlewares
app.use(session({
    secret: 'my first project',
    resave: false,
    saveUninitialized: true,
  }))


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve('public'))); 
app.use(methodOverride('_method'))

//Importações das rotas
const homeRoutes = require('./src/routes/homeRoutes');
const produtosRoutes = require('./src/routes/produtosRoutes');
const carrinhoRoutes = require('./src/routes/carrinhoRoutes');

app.use(isLoggedIn)
//Rotas
app.use(homeRoutes);
app.use(carrinhoRoutes);
app.use(produtosRoutes);


app.listen(3000, () => console.log("O servidor está funcionando na porta 3000"));
