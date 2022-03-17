//responsavel para iniciar o nosso servidor
const express = require('express') // express framework web estruturado (do node_modules), que roda sobre o ambiente node. Este módulo explica como configurar o seu ambiente de desenvolvimento e como executar tarefas comuns de desenvolvimento e implantação da web.
const route = require('./route'); // aqui estou importando o route pro meu serve saber da existencia dele
const path = require('path') /// aqui estou importando o modulo path

const server = express() // aqui estou iniciando o express

server.set('view engine', 'ejs') /// aqui estou configurando que a minha view engine é o 'ejs'

server.use(express.static("public")) /// aqui estou falando para o servidor que estou usando a pasta public

server.set('views', path.join(__dirname, 'views')) /// aqui estou juntando ../rocketq/src/views

server.use(express.urlencoded({extended: true}))

server.use(route) // e agr estou usando o route ou seja minhas rotas

server.listen(3000, () => console.log("RODANDO"))
 

