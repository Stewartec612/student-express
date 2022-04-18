let { Sequelize, DataTypes} = require('sequelize')

let env = process.env.NODE_ENV || 'development'
//NODE_ENV is used to decide by heroku if the app will be used in a 'production' or 'development' environment
//'development will only run locally and production will run publicly

let config = require(__dirname + '/../config.json')[env]

let db = {}

let sequelize

if(config.use_env_variable){
    sequelize = new Sequelize(process.env[config.use_env_variable], config)
}
else {
    sequelize = new Sequelize(config)
}

let studentModel = require('./student')(sequelize,DataTypes)

db[studentModel.name] = studentModel

db.sequelize = sequelize //information on how to connect to the database
db.Sequelize = Sequelize//reference to sequelize library

module.exports = db