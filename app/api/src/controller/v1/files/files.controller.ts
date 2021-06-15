import { IncomingMessage, ServerResponse } from 'http'

const util = require('util')
const formidable = require('formidable')

import { join } from 'path'

const fs = require('fs')
const { pipeline } = require('stream')
const pump = util.promisify(pipeline)

// ---

export async function files(
  _url: URL,
  req: IncomingMessage,
  res: ServerResponse
) {
  try {
    var form = new formidable.IncomingForm()

    form.maxFieldsSize = 512 * 1024 * 1024

    form.parse(req, async function (err: any, fields: any, _files: any) {
      //

      if (err) throw new Error(err)

      const { data, size, name } = fields

      await pump(
        data,
        fs.createWriteStream(join('outputAsS3Bucket', name + size + '.txt'))
      )

      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(JSON.stringify([{ fileId: 'i am uuid for example' }]))

      //
    })

    return
  } catch (error) {
    //

    res.writeHead(400, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify([{ message: error }]))
    res.end()

    return
  }
}
