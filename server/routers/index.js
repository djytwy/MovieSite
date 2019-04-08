const Router = require('koa-router')

const router = new Router()
const home = require('./home')
const api = require('./api')
const test = require('./test')

router.use('',home.routes(),home.allowedMethods())
router.use('/api',api.routes(),api.allowedMethods())
router.use('/test',test.routes(),test.allowedMethods())
router.url('/io_test', {id:4}, { query: {q:1} })

module.exports = router  