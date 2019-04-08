const Router = require('koa-router')
const Api = require('../controllers/api')
const TokenOprions = require('./../middlewares/token_options')

const router = new Router()

module.exports = router
    .post('/register',Api.register)
    .post('/login',Api.login)
    .post('/find_user',Api.find_user)
    .get('/login_out',TokenOprions.check_token,Api.login_out)
    .get('/init',TokenOprions.check_token,Api.init)
    .get('/get_movie_data', Api.get_movie_data)
