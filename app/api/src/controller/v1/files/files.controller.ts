import { IncomingMessage, ServerResponse } from 'http'

import { join } from 'path'
const { pipeline } = require('stream')

const fs = require('fs')
const util = require('util')
const formidable = require('formidable')

import { pool } from '../../../index'

// ---

const pump = util.promisify(pipeline)

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

      const { data, size, name, mime } = fields
      const address = name + '.' + size + '.txt'
      await pump(data, fs.createWriteStream(join('outputAsS3Bucket', address)))

      pool.getConnection(function (err, c) {
        if (err) {
          console.log(err)
          c.release()
        }

        const q = `insert into info (
          file_id, 
          name, 
          address, 
          file_size, 
          file_mime, 
          created_at
        ) values (
          UUID_TO_BIN(UUID()),?,?,?,?,NOW()); `
        const v = [name, address, size, mime, name]

        c.query(q, v, er => {
          if (er) {
            console.error(er.message)
            c.release()
            throw new Error(er.message)
          }
        })

        const q2 = `SELECT BIN_TO_UUID(file_id) as file_id FROM info WHERE file_size=?;`
        const v2 = [size]

        c.query(q2, v2, (er, r) => {
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
