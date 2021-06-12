import { fastify } from 'fastify'
import pino from 'pino'

import { config } from './config'

// ---

const server = fastify({
  logger: pino({ level: 'info' })
})

// register plugin below:

const { PORT } = config

const bootstrap = async () => {
  try {
    PORT && (await server.listen(PORT))
  } catch (err) {
    server.log.error
    console.log(err)
    process.exit(1)
  }
}

bootstrap()
