const Sequelize = require('sequelize');
const config = require('./../config')
const sequelize = new Sequelize('crawl_datas',config.MYSQL.USERNAME,config.MYSQL.PASSWORD, {
    host: config.MYSQL.HOST,
    port: config.MYSQL.PORT,
    dialect: 'mysql',
    operatorAliases: false,

    pool : {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('success !')
    })
    .catch(err => {
        console.log(`error : ${err}`)
    })

module.exports = sequelize
