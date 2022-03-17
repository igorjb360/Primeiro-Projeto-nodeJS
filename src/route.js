const express = require('express') // aqui estou importando o express
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router() //aqui estou atribundo route armazena todas as funcionalidades de rotas que o express tem

//aqui estou pegando as rotas das views
route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))   
route.get('/create-pass' , (req, res) => res.render("index", {page: 'create-pass'}))
route.get('/room/:room', (req, res) => res.render("room"))

//preciso ver melhor o que é req e res ?? req= representa solicitação HTTP res= representa a resposta HTTP que um aplicativo Express envia quando recebe uma solicitação HTTP

//formato que o formulario de dentro da modal tem que passar a informação
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/create-room', RoomController.create)

module.exports = route; /// aqui estou exportando o route para poder importar no server e usalo

