import { Context } from 'koa'
import { DefaultError } from '../default'

describe('Errors', () => {
  test('Default', async () => {
    const error = new DefaultError()

    expect(error.message).toEqual({ code: 5000, message: 'Unknown Error.' })
    expect(error.statusCode).toEqual(500)
  })

  test('Render To Context', async () => {
    const error = new DefaultError()
    const ctx = {} as Context
    error.render(ctx)
    expect(ctx).toEqual({ status: 500, body: { code: 5000, message: 'Unknown Error.' } })
  })
})
