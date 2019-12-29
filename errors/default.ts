import { Renderable } from '../types/renderable'
import { Context } from 'koa'

export class DefaultError implements Renderable {
  public statusCode = 500
  public message = { code: 5000, message: 'Unknown Error.' }
  public render(ctx: Context): void {
    ctx.status = this.statusCode
    ctx.body = this.message
  }
}

export const UnknownError = DefaultError
