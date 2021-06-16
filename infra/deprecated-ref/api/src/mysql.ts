// import fp from 'fastify-plugin'
// import { MySQLPromisePool } from 'fastify-mysql'
// // import { createTest } from '../query/test'

// // ---

// // 'mysql://user:password@sql/e2ecubbit'
// const connectionString = process.env
//   .DBURL!.replace('<DBUSER>', process.env.DBUSER!)
//   .replace('<DBPASS>', process.env.DBPASS!)
//   .replace('<DBSERVICE>', process.env.DBSERVICE!)
//   .replace('<DBNAME>', process.env.DBNAME!)

// // ---

// export default fp(async (fastify, opts) => {
//   fastify
//     .register(require('fastify-mysql'), {
//       promise: true,
//       connectionString
//     })
//     .ready(async () => {
//       const connection = await fastify.mysql.getConnection()
//       await connection.query('SELECT 1+1;')
//       connection.release()
//       console.log('db connected!!!')
//     })
// })

// // if you only pass connectionString
// declare module 'fastify' {
//   interface FastifyInstance {
//     mysql: MySQLPromisePool
//   }
// }

export {}
