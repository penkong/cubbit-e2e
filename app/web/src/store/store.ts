import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import { createStore, applyMiddleware } from 'redux'

import { persistedReducer } from './reducers'

// ---

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

middlewares.push()

// ------------------------------

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
)

export const persistor = persistStore(store as any)
