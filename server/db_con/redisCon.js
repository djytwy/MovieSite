const Redis = require('ioredis')
const conf = require('./../config')

const redis = new Redis(conf.REDIS_local.PORT,conf.REDIS_local.DB_URL);

module.exports = redis;