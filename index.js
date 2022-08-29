//Importar o express
const express = require('express');
const app = express();
const path = require('path');
const session = require("express-session");
const logger = require('morgan')


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

//Importações das rotas
const homeRoutes = require('./src/routes/homeRoutes');
const produtosRoutes = require('./src/routes/produtosRoutes');
const carrinhoRoutes = require('./src/routes/carrinhoRoutes');


//Rotas
app.use(homeRoutes);
app.use(produtosRoutes);
app.use(carrinhoRoutes);


app.listen(3000, () => console.log("O servidor está funcionando na porta 3000"));
