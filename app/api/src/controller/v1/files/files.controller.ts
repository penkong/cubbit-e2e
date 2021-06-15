import { IncomingMessage, ServerResponse } from 'http'

const util = require('util')
const formidable = require('formidable')

// ---

export async function files(
  _url: URL,
  req: IncomingMessage,
  res: ServerResponse
) {
  try {
    var form = new formidable.IncomingForm()

    form.maxFieldsSize = 512 * 1024 * 1024

    form.parse(req, function (err: any, fields: any, files: any) {
      if (err) {
        console.error(err.message)
        throw new Error(err)
      }

      console.log(fields.data)

      res.writeHead(200, { 'content-type': 'text/plain' })
      res.write('received upload:\n\n')

      res.end(util.inspect({ fields: fields, files: files }))
    })
    return
  } catch (error) {
    res.writeHead(400, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify([{ message: error }]))
    res.end()

    return
  }
}
