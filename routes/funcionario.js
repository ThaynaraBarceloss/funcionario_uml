const express = require('express')
const router = express.Router()

// IMPORTANDO AS TABELAS
const funcionario = require('../models/funcionario')
const departamento = require('../models/departamento')

// CRIANDO AS ROTAS
// 1º ROTA - INSERIR DADOS NA TABELA
router.get('/store', async(req, res)=> {
    const resultado = await funcionario.create({
        nome:'Joana Darc',
        salario:3000,
        cargo:'Analista de Sistemas',
        departamentoId: 1 // Esse campo é a chave estrangeira
    })
})

// 2ª ROTA - EXIBIR A PÁGINA INICIAL DO FUNCIONÁRIO
router.get('/', (req, res)=>{
    res.send('<h1> Página Inicial do Funcionário </h1>')
})

// 3ª ROTA - CONSULTAR DADOS NA TABELA
router.get('/show', async(req, res)=> {
    const resultado = await funcionario.findAll()

    if (resultado){
        console.log(resultado)
    }
    else{
        console.log('Não foi possível exibir os dados')
    }
})

module.exports = router 