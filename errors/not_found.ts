import { DefaultError } from './default'

export class NotFound extends DefaultError {
  public statusCode = 404
  public message = { code: 4040, message: 'Not Found.' }
}
