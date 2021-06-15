import { app } from './app'
import mysql from 'mysql2'

export const pool = mysql.createPool({
  connectionLimit: 5,
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'e2ecubbit'
})

// const { DBNAME, PORT } = config

async function main() {
  try {
    // if (!PORT || !DBNAME) throw new Error('Config Does Not Exist!')
    pool.getConnection(function (err, c) {
      if (err) console.log(err)
      c.query('SELECT 1+1;')
      c.release()
      console.log('db healty!')
    })

    app.listen(5000, () => console.log(`Server running on port ${5000}`))
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

main()

// --- handle things on bad things .

process.on('warning', e => console.warn(e.stack))
process.on('SIGINT', () => {
  shutdown()
})
process.on('SIGTERM', () => {
  shutdown()
})

// shut down server
function shutdown() {
  process.exitCode = 1
  process.exit()
}
