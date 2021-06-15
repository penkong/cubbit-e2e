import { IncomingMessage, ServerResponse } from 'http'

// import { getBody } from '../../../util'
const formidable = require('formidable')
const util = require('util')
// ---

export async function files(
  _url: URL,
  req: IncomingMessage,
  res: ServerResponse
) {
  try {
    // get body from buffer to string
    // const body = await getBody(req)
    // console.log(body)
    var form = new formidable.IncomingForm()
    console.log(req.headers)
    form.parse(req, function (err: any, fields: any, files: any) {
      if (err) {
        // Check for and handle any errors here.
        console.error(err.message)
        return
      }
      // console.log(fields)
      // console.log(files)
      res.writeHead(200, { 'content-type': 'text/plain' })
      res.write('received upload:\n\n')

      // This last line responds to the form submission with a list of the parsed data and files.

      res.end(util.inspect({ fields: fields.ffff, files: files }))
    })
    return

    // res.writeHead(201, { 'Content-Type': 'application/json' })
    // res.write(JSON.stringify(['h']))
    // res.end()

    return
  } catch (error) {
    res.writeHead(400, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify([{ message: error }]))
    res.end()

    return
  }
}
