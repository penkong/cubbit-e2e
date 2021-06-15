import fp from 'fastify-plugin'
import {} from 'fastify-multipart'

// ---

export default fp(async (fastify, opts) => {
  fastify
    .register(require('fastify-multipart'), { throwFileSizeLimit: false })
    .ready(async () => {
      console.log('fastify-multipart registred')
    })
})

// declare module 'fastify' {
//   interface FastifyRequest<
//     HttpRequest,
//     Query = fastify.DefaultQuery,
//     Params = fastify.DefaultParams,
//     Headers = fastify.DefaultHeaders,
//     Body = any
//   > {
//     user: string
//   }
// }

// function plugin(fastify, options, next) {
//   fastify.decorateRequest('user', 'userData')
//   next()
// }

// export const reqDecorator: any = fp(plugin)
