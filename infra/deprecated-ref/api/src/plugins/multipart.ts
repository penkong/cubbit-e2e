import fp from 'fastify-plugin'
import {} from 'fastify-multipart'

// ---

export default fp(async (fastify, opts) => {
  fastify
    .register(require('fastify-multipart'), {
      throwFileSizeLimit: false,
      limits: {
        fieldNameSize: 536870912, // Max field name size in bytes
        fieldSize: 536870912, // Max field value size in bytes
        fields: 536870912, // Max number of non-file fields
        fileSize: 536870912, // For multipart forms, the max file size in bytes
        files: 536870912, // Max number of file fields
        headerPairs: 536870912 // Max number of header key=>value pairs
      }
    })
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
