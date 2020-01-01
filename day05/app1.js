const Koa = require('koa')

let app1 = new Koa()

const static = require('koa-static') //中间件  处理静态资源

const path = require('path')

const router = require('koa-router')() //处理路由


const query = require('./db/index')

app1.use(static(path.join(process.cwd(), './public/')))

app1.use(router.routes())

app1.use(router.allowedMethods())

// app1.use(async () => {
//     if (ctx.path === '/userlist') {

//     } else if (ctx.path === '/add') {

//     }
// })

//成员列表

router.get('/userlist', async (ctx) => {

    //从数据库查询数据
    let data = await query()

    ctx.body = {
        code:1,
        data
    }
})

router.get('/detail', async (ctx) => {
    ctx.body = "详情"
})

app1.listen(9000, () => {
    console.log("服务启动成功")
})