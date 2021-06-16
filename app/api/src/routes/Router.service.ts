import { IncomingMessage, ServerResponse } from 'http'

import { validRoutes } from '../util'

import { postfile, getFileInfo, getStatic } from '../controller'

// ---

export class Router {
  //

  static async dispatch(url: URL, req: IncomingMessage, res: ServerResponse) {
    //

    const r = req.method + url.pathname

    if (r === validRoutes[0]) return await postfile(url, req, res)
    if (r.includes(validRoutes[2])) return await getStatic(url, req, res)
    if (r.includes(validRoutes[1])) return await getFileInfo(url, req, res)
  }
}
