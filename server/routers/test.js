const Router = require('koa-router')
const Test = require('./../controllers/test')

const router = new Router()

module.exports = router
    .get('/io_test/:id',Test.io_test)
    // .url('/io_test', {id:4}, { query: {q:1} })

