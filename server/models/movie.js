const sequelize = require('./../db_con/mysqlCon')
const Sequelize = require('sequelize')
// const Movie = sequelize.define('movie', {
//     name: {
//         type: Sequelize.STRING
//     },
//     age: {
//         type: Sequelize.INTEGER
//     }
// })

// Movie.sync({force: true})

const Movie = sequelize.define('movie_test', {
    title: {
        type: Sequelize.STRING
    },
    content_text: {
        type: Sequelize.TEXT
    },
    images_path: {
        type: Sequelize.TEXT
    },
    video_url : {
        type: Sequelize.TEXT
    },
    content_type: {
        type: Sequelize.STRING
    }
},
{
    // 禁止默认的createTime、updateTime
    timestamps:false,
    // 定义table的名称
    tableName: 'movie_test'
})

module.exports = Movie