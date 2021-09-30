const express = require('express') //erro que preciso lembrar eu nao tinha ideia do que era eu nao tinha atribuido a variavel controller
const QuestionController = require('./controllers/QuestionController')

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))   
route.get('/creat-pass' , (req, res) => res.render("index", {page: 'creat-pass'}))

route.get('/room' , (req, res) => res.render("room"))

// preciso ver melhor o que é req e res ??

//formato que o formulario de dentro da modal tem que passar a informação
route.post('/room/:room/:question/:action', QuestionController.index)

module.exports = route;
