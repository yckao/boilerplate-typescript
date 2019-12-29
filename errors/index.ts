import { Context, Middleware } from 'koa'
import { isRenderable } from '../types/renderable'
import { UnknownError } from './default'
import { NotFound } from './not_found'
import { isEmpty } from 'lodash'
import Debug from 'debug'

const debug = Debug('')

export * from './default'
export * from './unauthorization'
export * from './bad_request'
export * from './not_found'

export const ErrorHandler: () => Middleware = () => async (
  ctx: Context,
  next: () => Promise<unknown>,
): Promise<void> => {
  try {
    await next()
  } catch (err) {
    debug('handle error', err)
    if (isRenderable(err)) {
      return err.render(ctx)
    }
    new UnknownError().render(ctx)
  }

  if (!ctx.body || (isEmpty(ctx.body) && !Array.isArray(ctx.body))) {
    new NotFound().render(ctx)
  }
}
