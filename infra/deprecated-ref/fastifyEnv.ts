// import fp from 'fastify-plugin'

// const schema = {
//   type: 'object',
//   required: ['PORT', 'DBURL', 'DBSERVICE', 'DBPASS', 'DBUSER', 'DBNAME'],
//   properties: {
//     PORT: {
//       type: 'string',
//       default: process.env.PORT
//     },
//     DBURL: {
//       type: 'string',
//       default: process.env.DBURL
//     },
//     DBSERVICE: {
//       type: 'string',
//       default: process.env.DBSERVICE
//     },
//     DBPASS: {
//       type: 'string',
//       default: process.env.DBPASS
//     },
//     DBUSER: {
//       type: 'string',
//       default: process.env.DBUSER
//     },
//     DBNAME: {
//       type: 'string',
//       default: process.env.DBNAME
//     }
//   }
// }

// const data = {
//   PORT: process.env.PORT,
//   DBURL: process.env.DBURL,
//   DBSERVICE: process.env.DBSERVICE,
//   DBPASS: process.env.DBPASS,
//   DBUSER: process.env.DBUSER,
//   DBNAME: process.env.DBNAME
// }

// export default fp(async (fastify, opts) => {
//   fastify
//     .register(require('fastify-env'), {
//       // confKey: 'config',
//       schema,
//       data
//     })
//     .ready(err => {
//       if (err) console.error(err)
//       console.log(fastify.config)
//       console.log(process.env)
//     })
// })

// declare module 'fastify' {
//   interface FastifyInstance {
//     config: {
//       // this should be same as the confKey in options
//       PORT: string
//       DBURL: string
//       DBSERVICE: string
//       DBPASS: string
//       DBUSER: string
//       DBNAME: string
//     }
//   }
// }
