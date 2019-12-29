import { DefaultError } from './default'

export class UnAuthorization extends DefaultError {
  public statusCode = 401
  public message = { code: 4010, message: 'Unauthorization.' }
  constructor(message?: string) {
    super()
    if (message) this.message = { code: 4010, message }
  }
}
