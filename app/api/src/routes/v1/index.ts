import { FastifyPluginAsync } from 'fastify'
import { join } from 'path'

const fs = require('fs')
const util = require('util')
const { pipeline } = require('stream')
const pump = util.promisify(pipeline)

// ---

const e2e: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post('/files', async function (request, reply) {
    const data = await request.file()

    // await data.toBuffer() // Buffer
    await pump(data.file, fs.createWriteStream(join('outputed', data.filename)))

    return [{ message: 'success!' }]
  })

  fastify.get('/files', async function (request, reply) {})
}

export default e2e
