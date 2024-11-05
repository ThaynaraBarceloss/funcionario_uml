//CARREGAR OS MÓDULOS
const express = require('express');
const handlebars = require("express-handlebars")

const app = express()
const porta = 5500

// CONFIGURAR O EXPRESS PARA RECEBER DADOS DO FORMULÁRIO
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// CARREGAR AS ROTAS 
const funcionarioRouter = require('./routes/funcionario')

// UTILIZANDO AS ROTAS
app.use('/funcionario', funcionarioRouter)

//EXIBINDO INFORMAÇÕES NA TELA
app.get('/', (req, res) =>{
    res.send("<h1> Tudo Funcionando</h1>")
}) 



//EXECUTANDO O SERVIDOR
app.listen(porta, () => {
    console.log('Servidor executando na porta',porta)
})