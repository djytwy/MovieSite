const redis = require('./../db_con/redisCon')

class Test {
    static async io_test(ctx) {
        const data = await redis.get('test')
        const temp = ctx.params.id
        console.log(temp)
        ctx.response.body = data
    }
}

module.exports = Test