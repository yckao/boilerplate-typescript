import Router from 'koa-router'

const router = new Router({ prefix: '/healthz' })

router.get('/', async ctx => {
  ctx.body = 'ok'
})

export default router.middleware()
