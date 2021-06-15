import fp from 'fastify-plugin'

// ---

export default fp(async (fastify, opts) => {
  fastify
    .register(require('fastify-cors'), {
      // put your options here
      origin: '*'
    })
    .ready(async () => {
      console.log('cors registred')
    })
})
