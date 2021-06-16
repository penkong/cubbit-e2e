import { app } from './app'
import { pool } from './service'

// ---

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

    //
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

// 4735e928-ce51-11eb-baf9-0242c0a8c002
// ZXRydTRPQThiRzY5NGRyNmVQcGQ=
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
  pool.destroy()
  process.exit()
}
