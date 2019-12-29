import { Context } from 'koa'

export interface Renderable {
  render(ctx: Context): void
}

export const isRenderable = (obj: { render?: unknown }): obj is Renderable => {
  return typeof obj.render === 'function'
}
