import Router from 'koa-router'
import health from './health'

const router = new Router()

router.use(health.route)

export const route = router.middleware()
