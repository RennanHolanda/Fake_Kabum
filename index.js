//Importar o express
const express = require('express');
//Armazenar os métodos do express na variável app
const app = express();

//Importações das rotas
const homeRoutes = require('./routes/homeRoutes');
const produtosRoutes = require('./routes/produtosRoutes');
const carrinhoRoutes = require('./routes/carrinhoRoutes');

//Configurações do servidor
app.use(express.static('public')); //chamar o css na pasta public
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', 'views'); 


//Middlewares


//Rotas
app.use(homeRoutes);
app.use(produtosRoutes);
app.use(carrinhoRoutes);






//Sempre na ultima linha do arquivo do servidor, deve estar o listen.
app.listen(3000, () => console.log("O servidor está funcionando na porta 3000"));