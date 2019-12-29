import { BadRequest, MalformedJSON } from '../bad_request'

describe('Errors', () => {
  test('Bad Request', async () => {
    const error = new BadRequest()

    expect(error.message).toEqual({ code: 4000, message: 'Bad Request.' })
    expect(error.statusCode).toEqual(400)
  })

  test('Malformed JSON', async () => {
    const error = new MalformedJSON()

    expect(error.message).toEqual({ code: 4001, message: 'Malformed JSON.' })
    expect(error.statusCode).toEqual(400)
  })
})
