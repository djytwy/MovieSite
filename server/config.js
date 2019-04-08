const config = {
    PORT: 3001,

    MONGODB: {
        DB_URL:'mongodb://djytwy:twy930107@163.53.170.75:27017/koa'
    },
    REDIS:{
        DB_URL:'163.53.170.75',
        PORT:'6388'
    },
    REDIS_local:{
        DB_URL:'127.0.0.1',
        PORT:'6379'
    },
    TOKEN:{
        EXPIRESIN:60*60*24
    },
    PRODUCTION: true,
    MYSQL:{
        HOST: '180.76.173.15',
        PORT: 3366,
        USERNAME: 'root',
        PASSWORD: 'mysql123456',
    }
}

module.exports = config