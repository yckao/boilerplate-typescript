import { UnAuthorization } from '../unauthorization'

describe('Errors', () => {
  test('UnAuthorization', async () => {
    const error = new UnAuthorization()

    expect(error.message).toEqual({ code: 4010, message: 'Unauthorization.' })
    expect(error.statusCode).toEqual(401)
  })

  test('UnAuthorization With Message', async () => {
    const error = new UnAuthorization('message')

    expect(error.message).toEqual({ code: 4010, message: 'message' })
    expect(error.statusCode).toEqual(401)
  })
})
