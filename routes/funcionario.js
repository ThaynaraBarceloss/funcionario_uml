const express = require('express')
const router = express.Router()

// IMPORTANDO AS TABELAS
const funcionario = require('../models/funcionario')
const departamento = require('../models/departamento')

// CRIANDO AS ROTAS
// 1º ROTA - INSERIR DADOS NA TABELA
router.post('/store', async(req, res)=> {
    const resultado = await funcionario.create({
        nome:req.body.nome,
        salario: req.body.salario,
        cargo: req.body.cargo,
        departamentoId: req.body.departamento // Esse campo é a chave estrangeira
    })
    if(resultado){
        resultado.redirect('/')
    }
    else{
        res.json({erro:"Os dados não foram cadastrados no banco"})
    }
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

//4ª ROTA - DELETAR  DADOS NA TABELA
//:id siginifica que iremos passar um valor na rota,ou seja diferente e que será armazenado pela variável: id
router.get('/destroy/:id',async (req,res) =>{
    const resultado = await funcionario.destroy({
        where:{
            id:req.params.id //estamos recebendo o id via parâmetro que está sendo passado na rota, no caso, é o :id que estamos recebendo (FUNCIONÁRIO)
    }
})
})

// 5ª ROTA -EXIBIR FORMULÁRIO DE CADASTRO 
router.get('/create', (req, res) => {
    res.render('funcionario/addFuncionario')
})


module.exports = router 