const express = require('express')

const route = express.Router()   

route.get('/',(req, res) =>  res.render("index")) //codigo para rodar o site no navegador

module.exports = route