import { IncomingMessage, ServerResponse } from 'http'

import { validRoutes } from '../util'

import { files } from '../controller'

// ---

export class Router {
  //

  static async dispatch(url: URL, req: IncomingMessage, res: ServerResponse) {
    //

    const r = req.method + url.pathname

    if (r === validRoutes[0]) return await files(url, req, res)
  }
}
