/* eslint-disable @typescript-eslint/no-var-requires */
require('ts-node').register()

const { url } = require('./configs/postgres').default

module.exports = {
  client: 'pg',
  connection: url,
  migrations: {
    extension: 'ts',
  },
}
