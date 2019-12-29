import { NotFound } from '../not_found'

describe('Errors', () => {
  test('Not Found', async () => {
    const error = new NotFound()

    expect(error.message).toEqual({ code: 4040, message: 'Not Found.' })
    expect(error.statusCode).toEqual(404)
  })
})
