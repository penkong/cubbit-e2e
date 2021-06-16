import { IncomingMessage, ServerResponse } from 'http'

import { pool } from '../../../service'
import { getRow } from '../../../query'
import { join } from 'path'

const fs = require('fs')

// Defining pipelineAsync method

// ---

export async function getStatic(
  url: URL,
  _req: IncomingMessage,
  res: ServerResponse
) {
  try {
    const fileId = url.pathname.split('/')[4]

    // ---

    pool.getConnection(function (err, c) {
      if (err) {
        console.log(err)
        c.release()
      }

      c.query(getRow, [fileId], (er, r) => {
        if (er) {
          console.error(er.message)
          c.release()
          throw new Error(er.message)
        }

        // @ts-ignore
        const p = r[0].name + '.' + r[0].file_size + '.txt'
        const file = fs.createReadStream(join('outputAsS3Bucket', p))
        file.pipe(res)
        res.end
      })

      c.release()
    })
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
