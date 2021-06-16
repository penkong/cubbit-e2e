import { join } from 'path'
import { IncomingMessage, ServerResponse } from 'http'

const fs = require('fs')
const util = require('util')
const { pipeline } = require('stream')
const formidable = require('formidable')

import { pool } from '../../../service'
import { insertInfo, selectById } from '../../../query'

// ---

const pump = util.promisify(pipeline)

export async function postfile(
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

      // ---

      // write file to disk it can be s3 or any other services
      // also it can be delegate to child_processes if we want!
      const { data, size, name, mime } = fields
      const address = name + '.' + size + '.txt'
      await pump(data, fs.createWriteStream(join('outputAsS3Bucket', address)))

      // ---

      // after save successfully we write info to db!
      pool.getConnection(function (err, c) {
        if (err) {
          console.log(err)
          c.release()
        }

        // insertion
        c.query(insertInfo, [name, address, size, mime, name], er => {
          if (er) {
            console.error(er.message)
            c.release()
            throw new Error(er.message)
          }
        })

        // selection
        c.query(selectById, [size], (er, r) => {
          if (er) {
            console.error(er.message)
            c.release()
            throw new Error(er.message)
          }

          res.writeHead(200, { 'content-type': 'application/json' })
          //@ts-ignore
          res.end(JSON.stringify([{ fileId: r[0].file_id }]))
        })

        c.release()
      })
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
// 5b4411b4-ce2a-11eb-b2f3-0242ac1f0002
// eHdBbk1jaEVCUVk4NVJGcUl3Y0w=
