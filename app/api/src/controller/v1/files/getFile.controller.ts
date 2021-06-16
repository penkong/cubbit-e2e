import { IncomingMessage, ServerResponse } from 'http'

import { pool } from '../../../service'
import { getRow } from '../../../query/'

// ---

export async function getFileInfo(
  url: URL,
  _req: IncomingMessage,
  res: ServerResponse
) {
  try {
    const fileId = url.pathname.split('/')[3]
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
        res.writeHead(200, { 'content-type': 'application/json' })
        //@ts-ignore
        res.end(
          JSON.stringify([
            {
              fileId,
              //@ts-ignore
              name: r[0].name,
              //@ts-ignore
              size: r[0].file_size,
              //@ts-ignore
              mime: r[0].file_mime
            }
          ])
        )
      })

      c.release()
    })
    //

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
