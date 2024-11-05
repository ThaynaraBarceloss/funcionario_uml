const sequelizeDb = require('sequelize')
const sequelizeConfig = new sequelizeDb(
  'empresa', // o nome do banco de dados
  'root', // o nome do usuário do banco de dados
  '', // a senha do banco de dados
  {
    dialect:'sqlite',
    storage:'./empresa.sqlite'
    }
)

module.exports = {sequelizeDb, sequelizeConfig}
