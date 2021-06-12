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

console.log(connectionString)

export default fp(async (fastify, opts) => {
  fastify
    .register(require('fastify-mysql'), {
      promise: true,
      connectionString
    })
    .ready(async () => {
      console.log('db connected!!!')

      const connection = await fastify.mysql.getConnection()
      const [rows, _] = await connection.query('SHOW DATABASES;')
      const [rowss, __] = await connection.query('SHOW TABLES;')

      console.log(rows, '1')
      console.log(rowss, '1')

      connection.release()

      // console.log(sl)
    })
})

// if you only pass connectionString
declare module 'fastify' {
  interface FastifyInstance {
    mysql: MySQLPromisePool
  }
}
