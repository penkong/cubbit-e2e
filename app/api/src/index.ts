import { app } from './app'
// import { config } from './config'

// const { DBNAME, PORT } = config

async function main() {
  try {
    // if (!PORT || !DBNAME) throw new Error('Config Does Not Exist!')

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
