import { IncomingMessage } from 'http'

import { validMethods, validRoutes } from '../util'

// ---

export class UrlRefiner {
  //

  static maker(url: string, baseUrl: string = `http://localhost:${5000}`): URL {
    return new URL(url, baseUrl)
  }

  static checker(url: URL, req: IncomingMessage): boolean {
    let isOk = true

    if (!validMethods.includes(req.method!)) isOk = false
    if (url.pathname === '/favicon.ico') isOk = false

    const r = req.method + url.pathname

    if (!validRoutes.includes(r)) isOk = false
    if (r.includes(validRoutes[1])) isOk = true

    return isOk
  }
}
