import { FastifyPluginAsync } from 'fastify'
// import { join } from 'path'

// const fs = require('fs')
// const util = require('util')
// const { pipeline } = require('stream')
// const pump = util.promisify(pipeline)
// await pump(data.file, fs.createWriteStream(join('outputed', data.filename)))
// ---

const e2e: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post('/files', async function (req, reply) {
    console.log(req.headers)
    console.log(req.isMultipart())
    const uploadValue = req.body
    console.log(uploadValue)
    // const data = await req.file({
    //   limits: {
    //     fieldNameSize: 536870912, // Max field name size in bytes
    //     fieldSize: 536870912, // Max field value size in bytes
    //     fields: 536870912, // Max number of non-file fields
    //     fileSize: 536870912, // For multipart forms, the max file size in bytes
    //     files: 536870912, // Max number of file fields
    //     headerPairs: 536870912 // Max number of header key=>value pairs
    //   }
    // })
    // console.log(data.encoding)
    // await data.toBuffer() // Buffer
    // await pump(data.file, fs.createWriteStream(join('outputed', data.filename)))

    return [{ message: 'success!' }]
  })

  fastify.get('/files', async function (request, reply) {})
}

export default e2e
