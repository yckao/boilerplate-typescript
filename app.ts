import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import { MalformedJSON, ErrorHandler } from './errors'
import { route } from './components'
export const koa = new Koa()

koa.use(ErrorHandler())
koa.use(
  bodyparser({
    onerror: () => {
      throw new MalformedJSON()
    },
  }),
)
koa.use(route)
