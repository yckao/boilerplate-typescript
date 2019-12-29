import { DefaultError } from './default'

export class BadRequest extends DefaultError {
  public statusCode = 400
  public message = { code: 4000, message: 'Bad Request.' }
}

export class MalformedJSON extends BadRequest {
  public statusCode = 400
  public message = { code: 4001, message: 'Malformed JSON.' }
}
