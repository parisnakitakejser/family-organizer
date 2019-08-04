const Koa = require('koa')
const Router = require('koa-router')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const app = new Koa()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

async function start () {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server



  // Koa - api server handler
  const apiRouter = new Router({
    prefix: '/api'
  });

  apiRouter.get('/users', async ctx => {
    ctx.body = {foo: 'user get method'}
  });

  apiRouter.put('/users', async ctx => {
    ctx.body = {foo: 'user put method'}
  });

  apiRouter.post('/users', async ctx => {
    ctx.body = {foo: 'user post method'}
  });

  app.use(apiRouter.routes());
  app.use(apiRouter.allowedMethods());



  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
