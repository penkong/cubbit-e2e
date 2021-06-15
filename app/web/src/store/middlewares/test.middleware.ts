import { Middleware } from './middleware.interface'

// ---

export const testMiddleware: Middleware = store => next => action => {
  next(action)
}
