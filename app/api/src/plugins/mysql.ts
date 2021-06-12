import fp from 'fastify-plugin'
import { MySQLPromisePool } from 'fastify-mysql'
// import { createTest } from '../query/test'

// ---

// 'mysql://user:password@sql/e2ecubbit'
const connectionString = process.env
  .DBURL!.replace('<DBUSER>', process.env.DBUSER!)
  .replace('<DBPASS>', process.env.DBPASS!)
  .replace('<DBSERVICE>', process.env.DBSERVICE!)
  .replace('<DBNAME>', process.env.DBNAME!)

// ---

export default fp(async (fastify, opts) => {
  fastify
    .register(require('fastify-mysql'), {
      promise: true,
      connectionString
    })
    .ready(() => {
      console.log('db connected!!!')

      // const connection = await fastify.mysql.getConnection()
      // const [rows, _] = await connection.query('SHOW DATABASES;')
      // connection.release()
    })
})

// if you only pass connectionString
declare module 'fastify' {
  interface FastifyInstance {
    mysql: MySQLPromisePool
  }
}
