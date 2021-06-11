import { fastify } from 'fastify'
import pino from 'pino'
const Port = process.env.PORT
const server = fastify({
  logger: pino({ level: 'info' })
})

// register plugin below:

const start = async () => {
  try {
    await server.listen(Port!)
  } catch (err) {
    server.log.error
    process.exit(1)
  }
}
start()
