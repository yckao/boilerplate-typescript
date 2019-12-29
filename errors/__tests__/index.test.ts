import { Context } from 'koa'
import { ErrorHandler, DefaultError } from '../index'

describe('Error Handler Middleware', () => {
  test('Not Found', async () => {
    const handler = ErrorHandler()

    const ctx = {} as Context
    await handler(ctx, async () => ({}))

    expect(ctx).toEqual({ body: { code: 4040, message: 'Not Found.' }, status: 404 })
  })

  test('Unknown Error', async () => {
    const handler = ErrorHandler()

    const ctx = {} as Context
    await handler(ctx, async () => {
      throw new Error()
    })

    expect(ctx).toEqual({ body: { code: 5000, message: 'Unknown Error.' }, status: 500 })
  })

  test('Custom Error', async () => {
    const handler = ErrorHandler()

    class TestError extends DefaultError {
      statusCode = 1234
      message = { code: 5678, message: 'Test Error' }
    }

    const ctx = {} as Context
    await handler(ctx, async () => {
      throw new TestError()
    })

    const rendered = {} as Context
    new TestError().render(rendered)

    expect(ctx).toEqual(rendered)
  })
})
