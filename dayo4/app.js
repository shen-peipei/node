const Koa = require('koa')

const app = new Koa()

const fs = require('fs')

app.use(async (ctx, next) => {
    let startTime=new Date().getTime()
    console.log("第一个中间件")
    await next()
    console.log("第一个中间件结束")
    let endTime = new Date().getTime();
    let time = endTime - startTime;

    fs.writeFileSync('./log.log', `${ctx.path}-${ctx.method}-${ctx.status}-${time}`)
    ctx.body = time
})

app.use(async (ctx, next) => {

    console.log("第二个中间件")
    await next()
    console.log("第二个中间件结束")
})

app.use(async (ctx, next) => {
    console.log("第三个中间件")
})

app.listen(8080, () => {
    console.log('服务启动成功', )
})