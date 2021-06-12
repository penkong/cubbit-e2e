import { History } from 'history'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import { connectRouter } from 'connected-react-router'

import storage from 'redux-persist/lib/storage'

import { history } from '../../util'

// ---

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['router']
}

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history)
  })

export const persistedReducer = persistReducer(
  persistConfig,
  rootReducer(history)
)
