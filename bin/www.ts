#!/usr/bin/env node
import Debug from 'debug'
import http from 'http'
import { koa } from '../app'

const debug = Debug('')
const port = +process.env.PORT || '3000'

const server = http.createServer(koa.callback())

function onError(error: Error & { syscall?: string; code?: string }): void {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

function onListening(): void {
  const addr = server.address()
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  debug('Listening on ' + bind)
}

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)
