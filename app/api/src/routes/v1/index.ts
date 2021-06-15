import { FastifyPluginAsync } from 'fastify'
const fs = require('fs')
const util = require('util')
// const path = require('path')
const { pipeline } = require('stream')
const pump = util.promisify(pipeline)

const e2e: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post('/files', async function (request, reply) {
    const data = await request.file()

    // console.log(data.file)
    // console.log(data.fields)

    // console.log(data.filename)
    // console.log(data.encoding)
    // console.log(data.mimetype)
    //
    // await data.toBuffer() // Buffer
    // or
    await pump(data.file, fs.createWriteStream('../../../outputed'), {
      mode: 0o755
    })

    return [{ body: request.body }]
  })

  fastify.get('/normal', async function (request, reply) {
    return [{ body: request.body }]
  })
}

export default e2e
